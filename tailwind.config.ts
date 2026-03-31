import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#E50914",
        background: "#0B0B0F",
        surface: "#141414",
        text: "#FFFFFF",
      },
    },
  },

  plugins: [],
};

export default config;