/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px', // predeterminado
        'md': '768px', // predeterminado
        'lg': '1024px', // predeterminado
        'xl': '1280px', // predeterminado
        '2xl': '1536px', // predeterminado
        '3xl': '1920px', // personalizado
      },
    },
  },
  plugins: [],
}