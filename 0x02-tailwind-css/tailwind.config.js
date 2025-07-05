/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/*.html"
  ],
  safelist: [
    'bg-blue-200',
    'bg-blue-300', 
    'bg-blue-400',
    'p-4',
    'gap-4'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
