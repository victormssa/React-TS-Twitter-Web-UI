/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.tsx',
  ],
  theme: {
    fontSize: {
      '2xs': 13,
      xs: 14,
      sm: 15,
      md: 16,
      lg: 19,
      xl: 20,
      '2xl': 21,
      emoji1: 24,
      emoji2: 30,
      logo: 34,
    },
    
    colors: {
      blue: '#1DA1F2',
      darkBlue: '#2092DE',
      black: '#0F1419',
      pink: '#F4245E',
      white: '#FFFFFF',
      background: '#E5E5E5',
      transparent: 'rgba(0,0,0,0.0)',
      'dark1': '#17202A',
      'dark2': '#1C2733',
      'dark3': '#283340',
      'dark4': '#3A444C',
      'dark5': '#5B7083',
      'dark6': '#8899A6',
      'dark7': '#EBEEF0',
      'dark8': '#F7F9FA',
    },
    
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },
    },
  },
  plugins: [],
}
