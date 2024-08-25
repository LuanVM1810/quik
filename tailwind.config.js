/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'image': '0px 8px 5px grey',
      },
      colors: {
        "overlay": "#00000080",
      }
    },
  },
  plugins: [],
}