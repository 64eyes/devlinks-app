import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'outline-primary': '0px 0px 32px 0px #633CFF40', // Custom shadow
      },
      colors: {
        primary: '#633CFF',
        secondary: '#BEADFF',
        accent: '#FF3939',
        light: '#EFEBFF',
        dark: '#333333',
        gray: '#737373',
        lightGray: '#D9D9D9',
        background: '#FAFAFA',
        white: '#FFFFFF',
        purpleHover: '#633CFF',
        errorRed: '#FF3939',
      },
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
