/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors :{
        "hover-button" : "#F7CFD8",
        "text-color" : "#000000",
        // "tertiary" : "#F7CFD8",
        // "quaternary" : "#FBFDF7",
        // "quinary" : "#F7CFD8",
        // "senary" : "#FBFDF7",
        // "septenary" : "#F7CFD8",
        // "primary": '#2563eb',
      },
      backgroundColor :{
        "primary"  : "#FBFDF7",
        
      }
    },
  },
  plugins: [],
};
