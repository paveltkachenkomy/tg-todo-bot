import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	root: path.resolve("./src/client"),
	build: {
		outDir: path.resolve(__dirname, "./build/client"),
		emptyOutDir: true,
	},
	plugins: [react()],
});
