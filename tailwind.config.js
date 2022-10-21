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
        'Welcome-img': "url('/src/assets/img/Welcome.jpg')"
      },
      height: {
        '602px': '37.7rem',
        '720px': '45rem'

      },
    }
  },
  plugins: []
}
