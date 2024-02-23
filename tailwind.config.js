/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0b3d91',
          secondary: '#2d3748',
          accent: '#6366f1',
          neutral: '#3d4451',
          'base-100': '#040406',
          info: '#3b82f6',
          success: '#10b981',
          warning: '#ffc600',
          error: '#dc2626'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
};
