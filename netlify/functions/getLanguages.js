import fetch from "node-fetch";

export default async (event, context) => {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const params = new URLSearchParams(event.url.split("?")[1]);

  if (!GITHUB_TOKEN) {
    console.error("GITHUB_TOKEN not found");
    return new Response(
      JSON.stringify({ error: "GITHUB_TOKEN is not defined" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  if (!params.get("name")) {
    return new Response(
      JSON.stringify({ error: "Please provide a GitHub repo name" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const name = params.get("name");

  try {
    const res = await fetch(
      `https://api.github.com/repos/fox5352/${name}/languages`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      },
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("request failed :", error);
    return new Response(JSON.stringify({ message: "Failed to fetch repos" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
