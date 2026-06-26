/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0f',
        'bg-card': '#1a1a26',
        'bg-input': '#1e1e2c',
        primary: '#7c3aed',
        'primary-hover': '#6d28d9',
        accent: '#c084fc',
        'text-primary': '#f1f0f5',
        'text-secondary': '#9b99ab',
        'text-muted': '#5c5a70',
        'text-link': '#a78bfa',
        border: '#2a2a3d',
        'border-input': '#333350',
        rating: '#fbbf24',
        surface: '#16161f',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        londrina: ['Londrina Solid', 'cursive'],
      },
    },
  },
  plugins: [],
}