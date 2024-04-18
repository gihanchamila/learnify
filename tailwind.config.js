
/**  @type {import('tailwindcss').Config} */
import {fontFamily} from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          tertiary: "var(--color-tertiary)",
          quaternary: "var(--color-quaternary)",
        },


        p: {
          1: '#A8A9AD',  
          2: '#9C9DA2',
          3: '#909194',
          4: '#848587',
          5: '#78797A',
          6: '#6C6D6E',
          7: '#606162',
          8: '#545556',
          9: '#48494A',
          10: '#3D3B40'  
        },

        s: {
          1: '#E6E8FC', 
          2: '#D0D4F9', 
          3: '#BAC1F5', 
          4: '#A5ADF2', 
          5: '#8F99EE', 
          6: '#7A85EB', 
          7: '#6471E7', 
          8: '#4F5DE4', 
          9: '#3949E0', 
          10: '#525CEB'
        }


      },
      fontFamily: {
        sans:["var(--font-Inter)", ...fontFamily.sans]
      }
    },
  },
  plugins: [plugin(function({ addUtilities, addComponents, addBase,  e, config }) {
    addBase({});
    addComponents({
      ".h1": {
        "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
          {},
      },
      ".h2": {
        "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
          {},
      },
      ".h3": {
        "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
      },
      ".h4": {
        "@apply text-[2rem] leading-normal": {},
      },
      ".h5": {
        "@apply text-2xl leading-normal": {},
      },
      ".h6": {
        "@apply font-semibold text-lg leading-8": {},
      },
    })
    addUtilities({})
      
  }),],
}