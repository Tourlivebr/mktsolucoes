/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0077A2',  // Escurecido para melhor contraste
          gray: '#8C8C8C',
          darkblue: '#005676', // Escurecido para melhor contraste
          green: '#00A86B', // Adicionado para manter consistência
        },
        accent: {
          amber: '#F59E0B', // Adicionado para manter consistência
        },
        neutral: {
          dark: '#333333',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}