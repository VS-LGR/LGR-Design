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
        dark: "#0f172a",
        surface: "#1e293b",
        "surface-hover": "#334155",
        accent: "#06b6d4",
        "accent-soft": "#0891b2",
        "accent-glow": "rgba(6, 182, 212, 0.25)",
        primary: "#f1f5f9",
        muted: "#94a3b8",
        "border-dark": "#334155",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(6, 182, 212, 0.35)",
        "glow-sm": "0 0 20px -5px rgba(6, 182, 212, 0.3)",
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
