/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "primary-background": "var(--color-primary-background)",
        "primary-text": "var(--color-primary-text)",
        "primary-border": "var(--color-primary-border)",
      },
      spacing: {
        one: "var(--spacing-1)",
      },
    },
  },
  plugins: [],
}
