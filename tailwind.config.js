/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors: {
        'cyan-cus': '#00ffff',
      },
      backgroundImage: {

      },
      height: {
        '602px': '37.7rem',
      },
    }
  },
  plugins: []
}
