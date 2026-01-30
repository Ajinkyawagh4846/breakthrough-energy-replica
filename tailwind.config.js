/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0c"
      },
      fontFamily: {
        heading: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(90deg, #00ff87, #60efff)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(96,239,255,0.18), 0 0 40px rgba(0,255,135,0.12)"
      }
    }
  },
  plugins: [],
};

