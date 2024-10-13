/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false, // Disable dark mode in Tailwind CSS
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightwood: "#D9A673",
        forestgreen: "#228B22",
        olivegreen: "#808000",
        beige: "#F5F5DC",
        lightgray: "#D3D3D3",
        warmorange: "#FF8C00",
        lightpink: "#FFB6C1",
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
        spinner: 'spinner 1s linear infinite',
      },
      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  daisyui: {
    darkTheme: false, // Disable dark mode in DaisyUI
  },
  corePlugins: {
    preflight: true,
  },
};
