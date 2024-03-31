/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Outfit-Bold", "Arial"],
        body: ["Outfit-Light", "Arial"],
      },
      colors: {
        main: "#007BFF",
        secondary: "#C7A762",
        white: "#E9EFFF",
        black: "#222227",
        error: "#F12E5E",
        success: "#008A63",
      },
    },
  },
  plugins: [],
};
