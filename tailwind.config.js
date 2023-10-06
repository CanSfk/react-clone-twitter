/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['var(--font-sm)', {
        'lineHeight': 'var(--font-smLineHeight)'
      }],

      base: ['var(--font-base)', {
        'lineHeight': 'var(--font-baseLineHeight)'
      }],

      xl: ['var(--font-xl)', {
        'lineHeight': 'var(--font-xlLineHeight)'
      }],

      xxl: ['var(--font-xxl)', {
        'lineHeight': 'var(--font-xxlLineHeight)'
      }],
    }
  },
  plugins: [],
}

