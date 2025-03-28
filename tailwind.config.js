/** @type {import('tailwindcss').Config} */
import profileImage from '/profile.jpg';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00B4D8",
          50: "#E6F7FA",
          100: "#CCEFF5",
          200: "#99DFEB",
          300: "#66CFE1",
          400: "#33BFD7",
          500: "#00B4D8",
          600: "#0090AD",
          700: "#006C82",
          800: "#004856",
          900: "#00242B",
        },
        secondary: "#0077B6",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
