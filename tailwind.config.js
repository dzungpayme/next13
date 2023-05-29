/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "login-bg": "url('/public/background-login.svg')",
      },
      colors: {
        primary: "#00be00",
        primaryHover: "#049105",
      },
      boxShadow: {
        primary: "0 0, 0 0 10px #64b864",
      },
      screens: {
        mobile: { max: "600px" },
        onlyTablet: { min: "601px", max: "1023px" },
        tablet: { max: "1023px" },
        laptop: {
          min: "1024px",
          max: "1200px",
        },
      },
    },
  },
  plugins: [],
};
