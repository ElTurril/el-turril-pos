/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
      './storage/framework/views/*.php',
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.vue',
      // Agrega aquí cualquier otra ruta que necesites que Tailwind escanee.
      // Las rutas de '@source' de tu app.css ya están cubiertas aquí.
  ],
  theme: {
    extend: {
      // Aquí es donde defines tus variables de tema, como fuentes.
      fontFamily: {
        sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
    },
  },
  plugins: [],
}