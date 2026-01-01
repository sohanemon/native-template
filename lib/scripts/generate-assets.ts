#!/usr/bin/env bun

import type { Stats } from 'node:fs';
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const PROJECT_ROOT = path.resolve(__dirname, '../..');
const ASSETS_DIR = path.join(PROJECT_ROOT, 'assets');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'lib', 'constants', 'assets.ts');

const VALID_EXTENSIONS = new Set([
	'.png',
	'.jpg',
	'.jpeg',
	'.webp',
	'.gif',
	'.avif',
	'.svg',
]);

type AssetEntry = {
	key: string;
	requirePath: string;
};

async function walk(dir: string): Promise<string[]> {
	const entries = await readdir(dir, { withFileTypes: true });
	const files: string[] = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			files.push(...(await walk(fullPath)));
		} else if (entry.isFile()) {
			files.push(fullPath);
		}
	}

	return files;
}

function normalizeSlash(p: string) {
	return p.replace(/\\/g, '/');
}

function assertSafeKey(key: string) {
	if (!key.startsWith('/')) {
		throw new Error(`Asset key must start with "/": ${key}`);
	}

	if (key.includes(' ')) {
		throw new Error(`Asset path contains spaces (not recommended): ${key}`);
	}
}

async function main() {
	try {
		// 1️⃣ Ensure assets folder exists
		let stats: Stats;
		try {
			stats = await stat(ASSETS_DIR);
		} catch {
			throw new Error(`Assets folder not found: ${ASSETS_DIR}`);
		}

		if (!stats.isDirectory()) {
			throw new Error(`Assets path is not a directory: ${ASSETS_DIR}`);
		}

		// 2️⃣ Walk assets
		const allFiles = await walk(ASSETS_DIR);

		const assets: AssetEntry[] = [];

		for (const file of allFiles) {
			const ext = path.extname(file).toLowerCase();
			if (!VALID_EXTENSIONS.has(ext)) continue;

			const relativeToAssets = path.relative(ASSETS_DIR, file);
			const slashRelative = normalizeSlash(relativeToAssets);

			const key = `/${slashRelative}`;
			assertSafeKey(key);

			const requirePath = `@/assets/${slashRelative}`;

			assets.push({ key, requirePath });
		}

		if (assets.length === 0) {
			console.warn('⚠️ No valid asset files found.');
		}

		// 3️⃣ Sort for stable output
		assets.sort((a, b) => a.key.localeCompare(b.key));

		// 4️⃣ Ensure output directory exists
		await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });

		// 5️⃣ Generate file
		const content = `/**
 * ⚠️ AUTO-GENERATED FILE
 * Do not edit manually.
 */

export const Assets = {
${assets.map((a) => `  '${a.key}': require('${a.requirePath}'),`).join('\n')}
} as const;

export type AssetPath = keyof typeof Assets;
`;

		await writeFile(OUTPUT_FILE, content, 'utf8');

		console.log(`✅ Generated ${assets.length} assets`);
		console.log(`📄 Output: ${path.relative(PROJECT_ROOT, OUTPUT_FILE)}`);
	} catch (err) {
		console.error('❌ Asset generation failed');
		console.error(err instanceof Error ? err.message : err);
		process.exit(1);
	}
}

main();
