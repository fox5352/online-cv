import { writable, derived } from "svelte/store";

const initialTheme = getInitialTheme(); // Get the initial theme from local storage or browser preference

const internalTheme = writable(initialTheme);

export const theme = derived(internalTheme, ($internalTheme) => {
  setTheme($internalTheme); // Set the theme on the body
  return $internalTheme;
});

export function toggleTheme() {
  internalTheme.update((value) => {
    const newValue = value === "light" ? "dark" : "light";
    setTheme(newValue); // Set the new theme on the body
    return newValue;
  });
}

function getInitialTheme() {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    return storedTheme;
  } else {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDarkMode ? "dark" : "light";
  }
}

function setTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
}