import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        primary: "#2EC4B6",
        primaryDark: "#2CB3A7",
        secondary: "#CBF3F0",
        accent: "#FF9F1C",
      },
    },
  },
  plugins: [],
};
export default config;
