import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react"

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#ff1cf7",
        secondary: "#006FEE",
        light: "#ffffff",
        dark: "#000000",
        grayLight: "#d1d5db",
        surface: '#27272a'
      },
    },
    container: {
      padding: {
        DEFAULT: '3rem',
        sm: '4rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "dark",
    defaultExtendTheme: "dark",

  })],
}
export default config
