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
        'tweety-color': 'rgb(255, 228, 14)'
      },
      backgroundImage: {
        'Welcome-img': "url('/src/assets/img/Welcome.jpg')"
      },
      height: {
        '602px': '37.7rem',
        '720px': '45rem'

      },
      margin: {
        '735px': '735px',
      },
      borderWidth: {
        '3': '3px'
      },
      boxShadow: {
        'neon-current': 'inset 0 0 0.8em currentColor, 0 0 0.8em currentColor',
        'neon-white': 'inset 0 0 1em white, 0 0 1em white'
      }
    }
  },
  plugins: []
}
