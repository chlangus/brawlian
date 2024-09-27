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
        "brawl-pale-blue": "rgb(59,130,246)",
        "brawl-yellow": "#FDE400",
        "brawl-red": "#ff0000",
      },
    },
  },
  plugins: [],
};
export default config;
