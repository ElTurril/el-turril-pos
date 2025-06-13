// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    // Aquí le indicamos a Tailwind CSS que use tu archivo de configuración específico.
    // La función tailwindcss importada toma la ruta del archivo de configuración como argumento.
    tailwindcss('./tailwind3.config.js'),
    // Autoprefixer se añade como un plugin.
    autoprefixer,
  ],
};
