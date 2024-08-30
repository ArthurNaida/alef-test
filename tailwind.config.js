/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gray-main': '#1111117a',
        'gray-l': '#f1f1f1',
        'black-main': '#111111',
        'primary': '#01A7FD'
      },
      boxShadow: {
        'header-bottom': '0px 1px 0px rgba(17, 17, 17, 0.1)'
      },
      fontSize: {
        'placeholder': ['13px', '16px'],
        'main': ['14px', '24px'],
        'main-large': ['16px', '24px']
      }
    },
  },
  plugins: [],
}

