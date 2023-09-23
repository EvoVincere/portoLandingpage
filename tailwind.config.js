/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1e1b4b',
        light: '#3b82f6'
      }
    },
    fontFamily: {
      signature: ['Great Vibes'],
    }
  },
  plugins: [],
}

