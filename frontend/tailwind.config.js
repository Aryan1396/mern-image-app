/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a2e",
        accent: "#7c3aed",
        accentSoft: "#a78bfa",
        cream: "#faf8f5",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(26, 26, 46, 0.15)",
      },
    },
  },
  plugins: [],
};
