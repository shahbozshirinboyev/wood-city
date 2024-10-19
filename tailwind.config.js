/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false, // Disable dark mode in Tailwind CSS
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lighter: "#F5F2DC",
        lighterbg: "#fffef4",
        oranger: "#F0AF18",
        greener: "#34853D",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "0.5rem",
          lg: "0.7rem",
          xl: "1.5rem",
          "2xl": "1.5rem",
        },
      },
      animation: {
        spinner: 'spinner .7s linear infinite',
      },
      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontFamily:{
        sans: ['Didact Gothic', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui"),],
  daisyui: {
    darkTheme: false, // Disable dark mode in DaisyUI
  },
  corePlugins: {
    preflight: true,
  },
};
