/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-grayish-violet': '#474255',
        'very-dark-violet': '#1E143A',
        'slightly-desaturated-magenta': '#BC81B6',
      },
      fontFamily: {
        mantinia: ['"Mantinia Regular"', 'regular'],
        montserrat: [
          "Montserrat", "sans-serif"
        ],
        dosis: ['"Dosis Regular"', "sans-serif"]
      },
      boxShadow: {
        custom: '0px 0px 8px #02edf6, 0px 0px 16px #02edf6, 0px 0px 75px #02edf6',
        before: 'inset 0 0 0 200px rgba(255,255,255,0.05)',
      }
    },
  },
  plugins: [],
}
