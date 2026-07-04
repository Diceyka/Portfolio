import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "hsl(var(--page))",
        card: "hsl(var(--card))",
        "card-media": "hsl(var(--card-media))",
        ink: "hsl(var(--ink))",
        body: "hsl(var(--body))",
        label: "hsl(var(--label))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        "nav-active": "hsl(var(--nav-active))",
      },
      fontFamily: {
        display: ["'Averia Serif Libre'", "Vollkorn", "serif"],
        sans: ["'Inclusive Sans'", "'Golos Text'", "sans-serif"],
      },
      maxWidth: {
        page: "1160px",
        content: "880px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out both",
        "fade-in": "fade-in 1.2s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
