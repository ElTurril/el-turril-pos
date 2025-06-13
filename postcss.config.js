// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';

export default {
  plugins: [
    // postcss-import debe ser el primer plugin.
    postcssImport,
    // Luego, Tailwind CSS, apuntando a tu configuración específica.
    tailwindcss('./tailwind3.config.js'),
    // Finalmente, Autoprefixer.
    autoprefixer,
  ],
};
