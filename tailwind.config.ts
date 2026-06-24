import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06060c",
          900: "#0a0a14",
          800: "#10101e",
          700: "#16162a",
        },
        brand: {
          purple: "#a855f7",
          violet: "#8b5cf6",
          blue: "#6366f1",
          sky: "#3b82f6",
          pink: "#ec4899",
          gold: "#f5b942",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(120deg, #a855f7 0%, #6366f1 35%, #ec4899 70%, #f5b942 100%)",
        "brand-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(168,85,247,0.25) 0%, rgba(99,102,241,0.12) 45%, rgba(6,6,12,0) 80%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
