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
      blueishColor : 'rgb(var(--blueish-color) / <alpha-value>)',
      darkGray:'rgb(var(--dark-gray) /<alpha-value>)',
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
      keyframes: {
        extend: {
          '0%': { maxHeight: '0px', },
          '100%': {maxHeight:'300px' },
        },
        contract:{
          '0%': { maxHeight: '300px' },
          '100%': {maxHeight:'0px' },
        }
      },
      animation: {
        extend: 'extend 0.5s ease-in-out',
        contract:'contract 0.5s ease-in-out'
      },
      boxShadow: {
        'BlueShadow': '0 35px 60px -15px rgba(63, 128, 240, 0.2)',
      }
    },
  },
  plugins: [],
}
export default config
