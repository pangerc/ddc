/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        gellix: ["Gellix", "sans-serif"],
      },
      colors: {
        "lea-blue": "#546BD4", // Your custom color without shades
      },
    },
  },
  plugins: [],
};
