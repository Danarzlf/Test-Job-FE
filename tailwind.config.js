/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-x" : "#FBFBFB",
        "light-white": "rgba(255,255,255,0.17)",
        "customBorder": '#DCDFEA'
      },
      fontSize: {
        'custom8px': '8px',
        'custom20px': '20px',
        'custom12px': '12px',
        'custom14px': '14px',
        'custom16px': '16px',
        'custom26px': '26px',
      },
      spacing: {
        'custom2px': '2px',  // Padding 2px
        'custom6px': '6px',  // Padding 2px
      },
    },
  },
  plugins: [],
}