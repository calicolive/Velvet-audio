/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto, sans-serif"],
      },
      colors: {
        "red-salsa": "#ED4548",
        "imperial-red": "#EB3336",
        "corn-yellow": "##F7F06D",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
