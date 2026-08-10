/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      xs: "560px",
      sm: "600px",
      md: "700px",
      lg: "900px",
      xl: "1024px",
      "max-xs": { max: "559px" },
      "max-sm": { max: "599px" },
      "max-md": { max: "699px" },
      "max-lg": { max: "899px" },
      "max-xl": { max: "1023px" },
    },
    extend: {
      colors: {
        gold: "#c9a24d",
        "gold-dark": "#a9812f",
        "gold-light": "#e6cd8d",
        navy: "#0f1e35",
        "navy-2": "#16294a",
        "navy-deep": "#0a1526",
        ink: "#1c2333",
        "ink-soft": "#5c6470",
        cream: "#faf8f3",
        border: "#e7e2d6",
        danger: "#d64545",
        success: "#2e8b57",
      },
      borderRadius: {
        s: "10px",
        m: "16px",
        l: "24px",
      },
      boxShadow: {
        s: "0 2px 10px rgba(15, 30, 53, 0.08)",
        m: "0 14px 34px rgba(15, 30, 53, 0.12)",
        l: "0 26px 60px rgba(15, 30, 53, 0.2)",
      },
      maxWidth: {
        container: "1180px",
      },
      fontFamily: {
        body: ["var(--font-body)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
