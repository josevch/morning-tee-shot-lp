/** @type {import('tailwindcss').Config} */
export default {
  
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      screens: {
			
        'xs': {'max': '566px'},                     // Up to 566px (max-width)
        'sm': {'min': '567px', 'max': '959px'},     // 600px to 959px
        'md': {'min': '960px', 'max': '1247px'},    // 960px to 1247px
        'md-1248': {'min': '1248px', 'max': '1366px'}, // 1248px to 1366px
        'lg': {'min': '1367px'},                   // 1367px and up (min-width)
          },
     
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "E8E30F",
          "secondary": "#227b94",
          "accent": "#78b7d0",
          "neutral": "#fff",
          "base-100": "#205867",
          "info": "#78b7d0",
          "success": "#00ff00",
          "warning": "#E8E30F",
          "error": "#ff0000",
          },
        },
      ],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui"),

      function ({ addUtilities, theme }) {
        const newUtilities = {
          '.container-grid': {
            display: 'grid',
            'max-width': 'calc(100% - 2rem)', // Default for mobile-first
            'grid-template-columns': 'repeat(auto-fit, minmax(0, 1fr))',
          },
          '@screen sm': {
            '.container-grid': {
              'max-width': '560px', // On small screens
            },
          },
          '@screen md': {
            '.container-grid': {
              'max-width': 'calc(100% - 144px)', // On medium screens
            },
          },
        };
        addUtilities(newUtilities, ['responsive']);
      },
    ],

}




