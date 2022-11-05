/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
    "./subComponents/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-bg": "var(--dark-bg)",
        "light-bg": "var(--light-bg)"
      },
      animation: {
        'spin': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
