import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./styles/**/*.{css}"],
  darkMode: "class", // enforce dark mode regardless of system preference
  theme: {
    extend: {
      colors: {
        navy: "#0f1b2d",
        offwhite: "#f7f7f5",
        graycool: "#8a94a6",
        accent: "#6ea8fe"
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
