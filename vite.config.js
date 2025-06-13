import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from 'tailwindcss'; // Asegúrate de importar tailwindcss

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
    // Esta sección asegura que PostCSS (y por lo tanto Tailwind CSS)
    // procese tus archivos CSS con la configuración correcta.
    css: {
        postcss: {
            plugins: [
                // Aquí le decimos a Tailwind CSS que use tu archivo de configuración específico.
                tailwindcss('./tailwind3.config.js'),
                require('autoprefixer'), // Para prefijos de navegador automáticamente
            ],
        },
    },
});

