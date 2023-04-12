/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)',
        // paragraphs
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        // background, headings, buttons
        'very-light-gray': 'hsl(0, 0%, 95%)',
      },
    },
    fontFamily: {
      tittle: ['Big Shoulders Display', 'cursive'],
      body: 'Lexend Deca, sans-serif',
    },
  },
  plugins: [],
};
