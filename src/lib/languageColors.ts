export type ProgrammingLanguage =
  | "Rust"
  | "C"
  | "C++"
  | "C#"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "Python"
  | "Svelte"
  | string; // For other languages

export const languageColors: Record<ProgrammingLanguage, string> = {
  Rust: "#DEA584",
  C: "#555555",
  "C++": "#F34B7D",
  "C#": "#178600",
  CSS: "linear-gradient(90deg, #f43f5e,#818cf8,#d946ef)",
  HTML: "indianred",
  JavaScript: "#F1E05A",
  TypeScript: "#3178C6",
  Python: "#3572A5",
  Svelte: "#FF3E00",
  // Default color for unknown languages
  default: "#858585",
} as const;

// Helper function to get color safely
export const getLanguageColor = (language: string): string => {
  const normalizedLang = language in languageColors ? language : "default";
  return languageColors[normalizedLang];
};
