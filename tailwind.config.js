/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        'orange-light': '#E5B01E'
      },
      textShadow: {
        'orange-primary': '0px 3px 6px #00000029',
        'black-primary': '0px 3px 6px #FFBB0066'
      },
      boxShadow: {
        'profile-btn-1': '6px 6px 10px #BABABA8F',
        'profile-btn-2': '-4px -4px 10px #BEEBEB',
        'profile-tags': '-6px -6px 12px #FFFFFFCC'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #F0F0F0 0%, #EFEFEF 100%)',
      },
      letterSpacing: {
        'custom': '0.56px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ]
}

