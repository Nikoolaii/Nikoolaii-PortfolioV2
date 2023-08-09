/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#CAD2C5',
      secondary: '#84A98C',
      subtitle: '#52796F',
      accent: '#354F52',
      dark: '#2F3E46'
    },
    fontFamily: {
      comfortaa: ['Comfortaa', 'sans-serif']
    }
  },
  plugins: []
}
