import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import autoprefixer from 'autoprefixer'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/scss/app.scss',
                'resources/js/app.js',
            ],
            refresh: [
                'resources/js/**',
                'resources/views/**',
            ],
        }),
        ViteImageOptimizer({
            png: {
                // https://sharp.pixelplumbing.com/api-output#png
                quality: 85,
            },
        })
    ],

    css: {
        postcss: {
            plugins: [
                autoprefixer({
                    overrideBrowserslist: ['> 1%', 'last 10 versions', 'Firefox ESR']
                }),
            ]
        }
    },

    resolve: {
        alias: {},
    },

    server: {
        https: false,
        host: true,
        strictPort: false,
        port: 3009,
        hmr: {
            host: 'localhost',
            protocol: 'ws'
        },
        watch: {
            usePolling: true,
        },
    },

    build: {
        target: [
            'es2015',
        ],
    },
});
