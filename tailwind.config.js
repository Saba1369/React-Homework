/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens:{
        xs: '320px',
        sm: '550px',
        md: '768px'
      }
    },
  },
  plugins: [],
}

