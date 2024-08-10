/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Ensure these paths are correct for your project
  theme: {
    extend: {
      colors: {
        primary: "#2F3941",
        "primary-base": "#383E8A",
        secondary: "#7E8D96",
        dark: "#100E1F",
        "dark-purple": "#120A41",
        gray: {
          light: "#BABDC0",
        },
        yellow: {
          light: "#FDFCF6",
          layout: "#FAF8EB",
        },
        header: {
          two: "#14181A",
        },
        heading: "#14181A",
        neutral: {
          "-50": "#E4E6E7",
        },
      },
    },
  },
  plugins: [],
};
