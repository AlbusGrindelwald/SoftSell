/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', //  Enables class-based dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Your custom color palette (primary, secondary, accent, etc.)
        primary: { /* ... */ },
        secondary: { /* ... */ },
        accent: { /* ... */ },
        success: { /* ... */ },
        warning: { /* ... */ },
        error: { /* ... */ },
        gray: { /* ... */ },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 5px 15px rgba(0, 0, 0, 0.08)',
        'elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'pulse-soft': 'pulseSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
};
