import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0c1222",
        surface: "#1a2332",
        "surface-hover": "#2a3548",
        accent: "#22b8cf",
        "accent-soft": "#1a9bb0",
        "accent-glow": "rgba(34, 184, 207, 0.2)",
        primary: "#f1f5f9",
        muted: "#9aa8bc",
        "border-dark": "#2d3a4f",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 36px -12px rgba(34, 184, 207, 0.28)",
        "glow-sm": "0 0 18px -6px rgba(34, 184, 207, 0.22)",
        card: "0 4px 24px -4px rgba(0, 0, 0, 0.4)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
