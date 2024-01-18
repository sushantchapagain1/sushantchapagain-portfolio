/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Doing :dark:some-css is ok but we can use css variables to control in a single file.
        // the trick is giving same name of varible on different prefers color scheme.
        foregroundText: 'var(--foreground-text)',
        cardBackground: 'var(--cardBackground)',
        lightText: 'var(--light-text)',
      },
    },
  },
  plugins: [],
};
