/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E003F",
        secondary: "#A64D79",
        tertiary: "#FF5E8E",
      },
      screens: {
        ssm: "576px",
        mlg: "992px",
      },
    },
  },
  plugins: [],
};
