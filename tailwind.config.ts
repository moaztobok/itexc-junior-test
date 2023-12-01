import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      fontColor : 'rgb(var(--font-color) / <alpha-value>)',
      fontAccentColor : 'rgb(var(--gray-color) / <alpha-value>)',
      blueColor : 'rgb(var(--blue-color) / <alpha-value>)',
      orangeColor : 'rgb(var(--orange-color)/ <alpha-value>)',
      darkColor : 'rgb(var(--dark-color) / <alpha-value>)',
      bgColor : 'rgb(var(--background-color) / <alpha-value>)',
      
    },
    fontFamily:{
      'poppins':['poppins','sans-serif','sans-serif'],
      'roboto':['roboto','sans-serif','sans-serif'],
    },
    screens: {

      'lg': {'min': '1180px'},

      'md': {'max': '1180px'},

      'sm': {'max': '639px'},
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
