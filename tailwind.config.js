/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "scale-0",
    "scale-100",
    "opacity-0",
    "opacity-100",
    "transform",
    "duration-300",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#00FFAD",
      },
    },
  },
  plugins: [require("daisyui")],
};
