/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#CC1425',
        'brand-red-dark': '#a8101d',
      },
    },
  },
  plugins: [],
}