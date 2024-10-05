/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Ensure these paths are correct for your project
  theme: {
    extend: {
      colors: {
        primary: "#2F3941",
        "primary-base": "#383E8A",
        "primary-50": "#ECECF4",
        secondary: "#7E8D96",
        dark: "#100E1F",
        "dark-purple": "#120A41",
        gray: {
          light: "#BABDC0",
        },
        yellow: {
          light: "#FDFCF6",
          layout: "#FAF8EB",
          "light-100": "#FEB800",
          "light-200": "#FFF1CC",
        },
        header: {
          two: "#14181A",
        },
        heading: "#14181A",
        neutral: {
          "-50": "#E4E6E7",
          "-100": "#D5D7D9",
        },
        blue: {
          100: "#0E4BA3",
          200: "#018BE9",
          300: "#CCEAFF",
        },
        "success-50": "#E8F7F2",
        "success-base": "#02AB75",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
