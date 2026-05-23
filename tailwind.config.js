/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F4EFE3",
        "bg-dark": "#111428",
        primary: {
          DEFAULT: "#E76F51", // Coral CTA
          dark: "#D65A3B",
          foreground: "#111428",
        },
        secondary: "#ECE8DC",
        muted: {
          DEFAULT: "#ECE8DC",
          foreground: "#6B7280",
        },
      },
      fontFamily: {
        display: ["Lato", "Georgia", "serif"],
        body: ["Lato", "system-ui", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(17, 20, 40, 0.05), 0 12px 28px rgba(17, 20, 40, 0.07)",
        lift: "0 24px 48px -16px rgba(214, 90, 59, 0.35)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
