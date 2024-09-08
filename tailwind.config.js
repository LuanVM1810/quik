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
        'room' : '0px 6px 16px #B4BCC91F',
        'btn' : '0px 1px 4px #00000040',
      },
      colors: {
        "overlay": "#00000080",
      }
    },
  },
  plugins: [],
}