/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "primary-background": "var(--color-primary-background)",
        "primary-content": "var(--color-primary-content)",
        "primary-text": "var(--color-primary-text)",
        "primary-border": "var(--color-primary-border)",
        "primary-error": "var(--color-primary-error)",
      },
      spacing: {
        one: "var(--spacing-1)",
        two: "var(--spacing-2)"
      },
      fontSize: {
        "small": "var(--size-small)"
      }
    },
  },
  plugins: [],
}
