/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-grayish-violet': '#474255',
        'very-dark-violet': '#1E143A'
      },
      fontFamily: {
        mantinia: ['"Mantinia Regular"', 'regular'],
      },
    },
  },
  plugins: [],
}
