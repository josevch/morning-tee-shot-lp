/** @type {import('tailwindcss').Config} */
export default {
  
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
    
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "FFDC7F",
          
"secondary": "#227b94",
          
"accent": "#78b7d0",
          
"neutral": "#fff",
          
"base-100": "#16325b",
          
"info": "#78b7d0",
          
"success": "#00ff00",
          
"warning": "#ffdc7f",
          
"error": "#ff0000",
          },
        },
      ],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],

}

