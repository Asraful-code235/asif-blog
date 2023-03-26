/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#d3f1f2',
          200: '#a7e3e5',
          300: '#7cd5d9',
          400: '#50c7cc',
          500: '#24b9bf',
          600: '#1d9499',
          700: '#166f73',
          800: '#0e4a4c',
          900: '#072526',
        },
      },
    },
  },
  plugins: [],
};
