
/**  @type {import('tailwindcss').Config} */
import {fontFamily} from "tailwindcss/defaultTheme";
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
          white: "var(--color-white)"
        }
      },
      fontFamily: {
        sans:["var(--font-Inter)", ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
