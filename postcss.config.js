// postcss.config.js
export default {
  plugins: {
    // Si usas características de anidamiento de CSS (ej. en SASS o PostCSS Nested)
    // 'tailwindcss/nesting': {},
    'tailwindcss': {
      // Opcional: Si tienes una configuración compleja que no se maneja en vite.config.js,
      // puedes especificar aquí tu archivo de configuración de Tailwind.
      // Sin embargo, si ya lo configuraste en vite.config.js como se mostró,
      // esta línea puede no ser estrictamente necesaria aquí si Tailwind lo encuentra automáticamente.
      // Para mayor claridad y si tienes un tailwind3.config.js diferente del default,
      // puedes especificarlo aquí o en vite.config.js. En el ejemplo de vite.config.js anterior,
      // ya lo estamos especificando directamente allí.
    },
    'autoprefixer': {}, // Asegura que los prefijos de navegador se añadan
  },
};
