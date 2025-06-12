/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: '#1E40AF',      // mėlynas akcentas
        background: '#0A0F1F',   // tamsus fonas
      },
    },
  },
  plugins: [],
}