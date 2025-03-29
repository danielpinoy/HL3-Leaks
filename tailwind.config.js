/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          400: "#ff8c00",
          500: "#ff7400",
          600: "#e66a00",
        },
      },
    },
  },
  plugins: [],
};
