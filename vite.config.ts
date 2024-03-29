import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
			output: {
				dir: 'dist',
				entryFileNames: 'app.js',
				assetFileNames: 'styles.css',
			},
		},
	},
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
		},
	},
})
