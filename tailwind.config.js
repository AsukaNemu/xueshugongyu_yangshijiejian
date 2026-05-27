/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf6',
          100: '#dcfce9',
          200: '#b4f5d0',
          300: '#7aeab0',
          400: '#3dd68a',
          500: '#1ab86a',
          600: '#0e9655',
          700: '#0c7846',
          800: '#0d5f3a',
          900: '#0b4e31',
          950: '#042c1b',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Playfair Display',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'serif',
        ],
      },
    },
  },
  plugins: [],
}
