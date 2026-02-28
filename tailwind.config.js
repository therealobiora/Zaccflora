/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        // montserrat: ["var(--font-montserrat)"],
        // poppins: ["var(--font-poppins)"],
        // nunitoSans: ["var(--font-nunito-sans)"],
        delius: ["var(--font-delius)"],
      },
    },
  },
  plugins: [],
};
