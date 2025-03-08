import styles from "./MarkdownRender.module.css";
import { useEffect, useState } from "react";

type Tags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "img"
  | "code"
  | "hr"
  | "p"
  | "em"
  | "strong"
  | "ul"
  | "ol"
  | "li";

type Token = {
  type: Tags;
  value: string;
  tagFlags?: any[];
};

function markdownTokenizer(src: string): Token[] {
  const lines = src.split("\n").filter((line) => line.trim().length > 0);
  let index = 0;

  // TODO: add links
  // TODO: add lists
  // TODO: add `
  // TODO: add em and strong

  const map = {
    "^#{1,6}": "header",
    "^```": "code",
    "^!\[[a-z\w0-9]*\]\([a-z\w0-9]*\)": "image",
    "^---{3,}": "hr",
    "^[a-zA-Z0-9]": "paragraph",
  };

  const tagFinder = (line: string): Token | null => {
    for (const [regex, tag] of Object.entries(map)) {
      // valid allowed char
      if (new RegExp(regex).test(line)) {
        // header tag
        if (tag == "header") {
          const lastHashIndex = line.lastIndexOf("#");

          let tag = line.slice(0, lastHashIndex + 1);
          let content = line.slice(lastHashIndex + 1);

          const tagType = `h${tag.length}` as Tags;

          return {
            type: tagType,
            value: content.trim(),
          };
        }
        // image tag
        else if (tag == "image") {
          const firstBracketIndex = line.indexOf("[");
          const lastBracketIndex = line.lastIndexOf("]");
          const firstParenIndex = line.indexOf("(");
          const lastParenIndex = line.lastIndexOf(")");

          const altText = line.slice(firstParenIndex + 1, lastParenIndex);
          const src = line.slice(firstBracketIndex + 1, lastBracketIndex);

          return {
            type: "img",
            value: src,
            tagFlags: [`alt=${altText}`],
          };
        }
        // hr tag
        else if (tag == "hr") {
          return {
            type: "hr",
            value: "",
          };
        }
        // paragraph tag
        else if (tag == "paragraph") {
          return {
            type: "p",
            value: line.replace("[\\*\\`]", ""),
          };
        }
        // code tag
        else if (tag == "code") {
          const lastBacktickIndex = line.lastIndexOf("`");

          let language = line.slice(lastBacktickIndex + 1);

          let buffer: string[] = [];

          index++;
          $: loop: while (index < lines.length) {
            buffer.push(lines[index]);

            if (new RegExp("^```").test(lines[index])) {
              break loop; // Breaks out of the labeled loop when a line starts with ```
            }

            index++;
          }

          return {
            type: "code",
            value: buffer.join("\n ").replace(/`/g, ""),
            tagFlags: [`lang=${language}`],
          };
        } else {
          continue;
        }
      }
    }

    return null;
  };

  const tokens: Token[] = [];

  for (; index < lines.length; index++) {
    const token = tagFinder(lines[index]);
    if (token) {
      tokens.push(token);
    }
  }

  return tokens;
}

function markDownBuilder(tokens: Token[]): JSX.Element[] {
  return tokens.map((token) => {
    switch (token.type) {
      case "h1":
        return <h1>{token.value}</h1>;
      case "h2":
        return <h2>{token.value}</h2>;
      case "h3":
        return <h3>{token.value}</h3>;
      case "h4":
        return <h4>{token.value}</h4>;
      case "h5":
        return <h5>{token.value}</h5>;
      case "h6":
        return <h6>{token.value}</h6>;
      case "img":
        return <img src={token.value} {...token.tagFlags} />;
      case "hr":
        return <hr />;
      case "code":
        return <code {...token.tagFlags}>{token.value}</code>;
      case "p":
        return <p>{token.value}</p>;
      default:
        return <></>;
    }
  });
}

function MarkdownRender({ children }: { children: string }) {
  const [tokens, setTokens] = useState<Token[]>([]);
  useEffect(() => {
    setTokens(markdownTokenizer(children));
  }, [children]);

  return (
    <span className={styles.body}>
      {markDownBuilder(tokens).map((token) => (
        <>{token}</>
      ))}
    </span>
  );
}

export default MarkdownRender;
