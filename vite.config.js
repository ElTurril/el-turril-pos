import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', // Tu archivo CSS principal de la aplicación
                'resources/css/filament-tailwind3.css', // El archivo CSS específico de Filament/Tailwind 3
                'resources/js/app.js', // Tu archivo JS principal
            ],
            refresh: true,
        }),
    ],
    // Hemos eliminado la sección 'css.postcss' de aquí.
    // Vite detectará automáticamente tu postcss.config.js y aplicará esos plugins.
});

