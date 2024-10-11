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
        'btn' : '0px 4px 4px #00000040',
      },
      colors: {
        "overlay": "#00000080",
        "quik-purple": "#506df7",
        "quik-green": "#42fcac",
        "quik-blue": "#36b2f0",
      },
      keyframes: {
        rotate: {
          "0%": {transform: "rotate(-20deg)"},
          "50%": {transform: "rotate(20deg)"},
          "100%": {transform: "rotate(-20deg)"}
        }
      },
      animation: {
        rotate: "rotate 3s linear infinite",
      }
    },
  },
  plugins: [],
}