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
    "collapse",
    "collapse-arrow",
    "collapse-title",
    "collapse-content",
    "bg-transparent",
    "text-white",
    "border-white",
    "rounded-none",
    "text-xl",
    "md:text-3xl",
    "text-5xl",
    "md:px-20",
    "px-5",
    "mb-6",
    "w-full",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#00FFAD",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    daisyui: {
      themes: ["dark"],
    },
  },
};
