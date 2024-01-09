import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'DM Sans',
          ...defaultTheme.fontFamily.sans,
        ],
        headline: [
          'Franklin Gothic Std', 'sans-serif'
        ]
      },
      colors: {
        beige: '#E9D5CA',
        orange: '#FB7959',
        purple: {
          50: '#faf6fd',
          100: '#f4ebfc',
          200: '#e9d7f7',
          300: '#dab7f0',
          400: '#c48ce6',
          500: '#aa5fd6',
          600: '#652B80',
          700: '#77319a',
          800: '#652b80',
          900: '#542768',
          950: '#330f43'
        },
        dark: '#2f2f2f'
      }
    }
  }
}
