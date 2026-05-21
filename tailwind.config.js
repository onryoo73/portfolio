/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        primary: {
          DEFAULT: "#FF6B00",
          light: "#FF8533",
          dark: "#CC5600",
        },
        orange: {
          500: "#FF6B00",
          600: "#E66000",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['CalSans-SemiBold', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 107, 0, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 107, 0, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
