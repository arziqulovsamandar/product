/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: { 100: '#DEF9EC', 200: '#237D64' },
        blue: { 100: '#F2F3F4', 200: '#253D4E' },
        yellow: { 100: '#FFD480', 200: '#FDC040' },
        gray: { 100: '#F1F1F1', 200: '#636363' },
      },

      screens: {
        '4xs': '360px',
        '3xs': '400px',
        '2xs': '480px',
        xs: '560px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },

      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },

      animation: {
        progress: 'progress 3s ease-in-out',
      },

      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { transform: '100%' },
        },
      },
    },
  },
  plugins: [],
};

