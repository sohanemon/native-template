/// <reference types="vitest" />

import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'node',
		globals: true,
		exclude: ['node_modules/**'],
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'),
		},
	},
});
