import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/filament-tailwind3.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    // Asegúrate de que no haya una sección 'css.postcss' aquí,
    // ya que PostCSS se configurará a través de postcss.config.js
});