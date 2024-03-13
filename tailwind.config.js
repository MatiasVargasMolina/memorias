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
      'xl': '22px',
    },
    fontWeight: {
      thin: '200',
    },
    lineHeight: {
      'extra-loose': '45px'
    }
  },
  },
  plugins: [],
}
