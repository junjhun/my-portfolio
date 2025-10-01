/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Define the custom animation keyframes
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      // Apply the keyframes to an animation utility class
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
