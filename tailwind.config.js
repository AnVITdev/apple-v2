/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appleGray: {
          surface: '#f5f5f7',
          darkSurface: '#161617',
          subtext: '#86868b',
          border: '#d2d2d7',
        },
        appleBlue: {
          DEFAULT: '#0071e3',
          hover: '#0077ed',
          link: '#0066cc',
        }
      },
      fontFamily: {
        sf: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "SF Pro Icons",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif"
        ]
      }
    },
  },
  plugins: [],
}
