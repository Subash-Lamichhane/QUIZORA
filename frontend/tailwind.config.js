/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 60px -20px rgba(0,0,0,0.75)'
      }
    },
  },
  plugins: [],
}