/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'red-600': '#dc2626',
      'orange-600':'#ea580c',
      'purple-950':'#3b0764',
    }
  },
  plugins: [],
}