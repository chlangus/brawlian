import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brawl-blue": "rgb(0,0,255)",
        "brawl-pale-blue": "#377dff",
        "brawl-more-pale-blue": "#649BFF",
        "brawl-yellow": "#FDE400",
        "brawl-red": "#ff0000",
      },
    },
  },
  plugins: [],
};
export default config;
