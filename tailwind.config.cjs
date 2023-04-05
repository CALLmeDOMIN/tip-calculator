/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ['Space Mono', 'system-ui']
      }
    },
  },
  plugins: [],
};

module.exports = config;
