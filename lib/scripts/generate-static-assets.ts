#!/usr/bin/env bun

import type { Stats } from 'node:fs';
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const PROJECT_ROOT = path.resolve(__dirname, '../..');

const ASSET_CONFIGS = [
	{
		sourceDir: 'assets/static',
		outputFile: 'lib/assets/static.ts',
		prefix: '/static',
		varName: 'StaticAssets',
		typeName: 'StaticAssetPath',
	},
	{
		sourceDir: 'assets/remote',
		outputFile: 'lib/assets/remote.ts',
		prefix: '/remote',
		varName: 'RemoteAssets',
		typeName: 'RemoteAssetPath',
	},
] as const;

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

async function generateAssetsForConfig(config: (typeof ASSET_CONFIGS)[number]) {
	const sourceDir = path.join(PROJECT_ROOT, config.sourceDir);
	const outputFile = path.join(PROJECT_ROOT, config.outputFile);

	let stats: Stats;
	try {
		stats = await stat(sourceDir);
	} catch {
		console.warn(`⚠️ Assets folder not found: ${config.sourceDir}, skipping...`);
		return 0;
	}

	if (!stats.isDirectory()) {
		console.warn(
			`⚠️ Assets path is not a directory: ${config.sourceDir}, skipping...`,
		);
		return 0;
	}

	const allFiles = await walk(sourceDir);
	const assets: AssetEntry[] = [];

	for (const file of allFiles) {
		const ext = path.extname(file).toLowerCase();
		if (!VALID_EXTENSIONS.has(ext)) continue;

		const relativeToSource = path.relative(sourceDir, file);
		const slashRelative = normalizeSlash(relativeToSource);

		const key = `${config.prefix}/${slashRelative}`;
		assertSafeKey(key);

		const requirePath = `@/assets/${config.sourceDir.split('/')[1]}/${slashRelative}`;

		assets.push({ key, requirePath });
	}

	assets.sort((a, b) => a.key.localeCompare(b.key));

	await mkdir(path.dirname(outputFile), { recursive: true });

	const content = `/**
 * ⚠️ AUTO-GENERATED FILE
 * Do not edit manually.
 */

export const ${config.varName} = {
${assets.map((a) => `  '${a.key}': require('${a.requirePath}'),`).join('\n')}
} as const;

export type ${config.typeName} = keyof typeof ${config.varName};
${config.varName === 'StaticAssets' ? `export type AssetPath = ${config.typeName};` : ''}
`;

	await writeFile(outputFile, content, 'utf8');

	return assets.length;
}

async function main() {
	let totalAssets = 0;

	for (const config of ASSET_CONFIGS) {
		try {
			const count = await generateAssetsForConfig(config);
			if (count > 0) {
				console.log(`✅ Generated ${count} assets for ${config.sourceDir}`);
				console.log(`📄 Output: ${config.outputFile}`);
				totalAssets += count;
			}
		} catch (err) {
			console.error(`❌ Asset generation failed for ${config.sourceDir}`);
			console.error(err instanceof Error ? err.message : err);
			process.exit(1);
		}
	}

	if (totalAssets === 0) {
		console.warn('⚠️ No valid asset files found in any folder.');
	} else {
		console.log(
			`\n🎉 Total: ${totalAssets} assets generated from ${ASSET_CONFIGS.length} sources`,
		);
	}
}

main();
