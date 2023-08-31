/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
      "./public/*.html",
      "./src/*.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "air-bnb-primary-red": "#FF5A5F",
        "air-bnb-primary-purple": "#914669",
        "air-bnb-primary-green": "#008489",

        "air-bnb-secondary-dark-grey": "#484848",
        "air-bnb-secondary-middle-grey": "#767676",
        "air-bnb-secondary-white": "#FFFFFF",
      }
    },
  },
  plugins: [],
}

