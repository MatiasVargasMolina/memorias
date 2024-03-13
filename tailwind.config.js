export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {fontFamily: {
      play: ["CourierPrime", "sans-serif"],
      verdana: ["verdana","sans"],
      verdanaBold: ["verdanaBold","sans"],
    },
    fontSize: {
      'xl': '27px',
    },
    fontWeight: {
      thin: '200',
    },
    lineHeight: {
      'extra-loose': '45px'
    },
    letterSpacing: {
      wider: '0.01em', // Puedes ajustar este valor según tus preferencias
    },
  },
  },
  plugins: [],
}
