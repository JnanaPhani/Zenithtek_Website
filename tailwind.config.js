/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#085F63',
          light: '#0A757B',
          dark: '#064649',
        },
        secondary: {
          DEFAULT: '#49BEB7',
          light: '#64D8D2',
          dark: '#3A9A94',
        },
        accent: {
          DEFAULT: '#FACF5A',
          light: '#FBDA7F',
          dark: '#F9C231',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
    },
  },
  plugins: [],
};