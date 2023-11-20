/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      scale: {
        '105': '1.05'
      },
  },
  plugins: [],
}
}
