/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        stack: {
          '0%': { transform: 'rotate(-10deg) translateY(0px)', opacity: '1' },
          '20%': { transform: 'rotate(-5deg) translateY(-5px)' },
          '40%': { transform: 'rotate(0deg) translateY(-10px)' },
          '60%': { transform: 'rotate(5deg) translateY(-15px)' },
          '80%': { transform: 'rotate(10deg) translateY(-20px)' },
          '100%': { transform: 'rotate(15deg) translateY(-25px)', opacity: '0' },
        },
      },
      animation: {
        stack: 'stack 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}