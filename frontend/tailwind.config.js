/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pulse: {
          bg: "#0B1220",
          surface: "#111B2E",
          surface2: "#16223A",
          border: "#26324F",
          text: "#EAF0FF",
          muted: "#9AA6C0",
          soft: "#6B7693",
          success: "#22C55E",
          danger: "#EF4444",
          warning: "#FBBF24",
          primary: "#6366f1",
          secondary: "#8b5cf6",
          dark: "#1e1b4b",
          light: "#e0e7ff",
        },
      },
    },
  },
  plugins: [],
};
