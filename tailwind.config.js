/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5F72BE",

          secondary: "#2D81F7",

          accent: "#9921E8",

          neutral: "#ffffff",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
