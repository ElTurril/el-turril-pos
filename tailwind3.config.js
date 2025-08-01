/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Instrument Sans', 
          'ui-sans-serif', 
          'system-ui', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji',
          'Segoe UI Symbol', 
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [],
}

