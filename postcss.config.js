// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';

export default {
  plugins: [
    // ¡postcss-import debe ser el primer plugin para resolver las importaciones de CSS!
    postcssImport,
    // Luego, Tailwind CSS.
    tailwindcss('./tailwind3.config.js'),
    // Finalmente, Autoprefixer.
    autoprefixer,
  ],
};
