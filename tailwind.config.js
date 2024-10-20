/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        decorativa1: '#3B82F6', // Cor decorativa #1
        decorativa2: '#1E3A8A', // Cor decorativa #2
        base1: '#F7FAFF', // Cor base #1
        base2: '#171717', // Cor base #2
        base3: '#D4D4D8', // Cor base #3
        base4: '#27272A', // Cor base #4
      },
      fontFamily: {
        title: ['Inter', 'sans-serif'],
        text: ['RedHat Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
