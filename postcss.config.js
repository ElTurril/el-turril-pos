    // postcss.config.js
    import tailwindcss from 'tailwindcss';
    import autoprefixer from 'autoprefixer';
    import postcssImport from 'postcss-import'; // Asegúrate de que esto esté instalado: npm install postcss-import --save-dev

    export default {
      plugins: [
        // postcss-import debe ser el primer plugin si usas @import en tus CSS.
        postcssImport,
        // Luego, Tailwind CSS, apuntando a tu configuración específica.
        tailwindcss('./tailwind3.config.js'), // <-- ¡Importante que esta ruta sea correcta!
        // Finalmente, Autoprefixer.
        autoprefixer,
      ],
    };