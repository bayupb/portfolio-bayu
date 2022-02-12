module.exports = {
  purge: [
    '*'
  ],
  theme: {
    fontFamily: {
      'harmattan': ['Harmattan', 'cursive'],
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
       backgroundImage: {
        'hero-background': "url('/img/bg.jpg')",
      }
    },
  },
  plugins: [
    (process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
}
