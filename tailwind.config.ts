import {heroui} from '@heroui/theme';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/progress.js"
  ],
    darkMode: ["class"],
    theme: { 
      extend: {
        fontFamily: {
        'ui-sans-black': ['var(--ui-sans-black)'],
        'ui-sans-bold': ['var(--ui-sans-bold)'],
        'ui-sans-heavy': ['var(--ui-sans-heavy)'],
        'ui-sans-semibold': ['var(--ui-sans-semibold)'],
        'ui-sans-medium': ['var(--ui-sans-medium)'],
        'ui-sans-light': ['var(--ui-sans-light)'],
        'ui-sans-ultralight': ['var(--ui-sans-ultralight)'],
        'acorn': ['var(--font-acorn)'],
        'gt': ['var(--font-gt)'],
        },
        animation: {
          first: "moveVertical 30s ease infinite",
          second: "moveInCircle 20s reverse infinite",
          third: "moveInCircle 40s linear infinite",
          fourth: "moveHorizontal 40s ease infinite",
          fifth: "moveInCircle 20s ease infinite",
        },
        keyframes: {
          moveHorizontal: {
            "0%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
            "50%": {
              transform: "translateX(50%) translateY(10%)",
            },
            "100%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
          },
          moveInCircle: {
            "0%": {
              transform: "rotate(0deg)",
            },
            "50%": {
              transform: "rotate(180deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
          moveVertical: {
            "0%": {
              transform: "translateY(-50%)",
            },
            "50%": {
              transform: "translateY(50%)",
            },
            "100%": {
              transform: "translateY(-50%)",
            },
          },
        },
      },
    },
  plugins: [heroui()],
  };
  