import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const projectRoot = process.cwd();

// Directories to remove
const dirsToRemove = ['server', 'lib/trpc', 'app/trpc'];

// Files to remove
const filesToRemove = ['api/index.ts'];

// Dependencies to remove
const depsToRemove = [
	'@trpc/client',
	'@trpc/react-query',
	'@trpc/server',
	'@trpc/tanstack-react-query',
	'@tanstack/react-query',
	'expo-server',
	'superjson',
];

// Files with tRPC imports to clean
const filesToClean = [
	'app/(stack)/(drawer)/index.tsx',
	'lib/context/providers.tsx',
];

console.log('Starting full cleanup of tRPC and server-related code...');

// Remove directories
for (const dir of dirsToRemove) {
	const fullPath = join(projectRoot, dir);
	if (existsSync(fullPath)) {
		rmSync(fullPath, { recursive: true, force: true });
		console.log(`Removed directory: ${dir}`);
	}
}

// Remove files
for (const file of filesToRemove) {
	const fullPath = join(projectRoot, file);
	if (existsSync(fullPath)) {
		rmSync(fullPath);
		console.log(`Removed file: ${file}`);
	}
}

// Update package.json
try {
	const packageJsonPath = join(projectRoot, 'package.json');
	const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

	let removedCount = 0;
	for (const dep of depsToRemove) {
		if (packageJson.dependencies?.[dep]) {
			delete packageJson.dependencies[dep];
			console.log(`Removed dependency: ${dep}`);
			removedCount++;
		}
	}

	if (removedCount > 0) {
		writeFileSync(
			packageJsonPath,
			`${JSON.stringify(packageJson, null, '\t')}\n`,
		);
		console.log('Updated package.json');
	}
} catch (error) {
	console.error('Failed to update package.json:', error);
}

// Update app.config.ts
try {
	const configPath = join(projectRoot, 'app.config.ts');
	let configContent = readFileSync(configPath, 'utf-8');

	// Remove server-related settings
	configContent = configContent.replace(/\s*output: 'server',\n/g, '');
	configContent = configContent.replace(
		/\s*unstable_useServerMiddleware: true,\n/g,
		'',
	);
	// Remove empty objects in plugins
	configContent = configContent.replace(/{\s*},\n/g, '{\n\t\t\t},\n');
	// Remove router block in extra
	configContent = configContent.replace(
		/\s*router: {\s*unstable_useServerMiddleware: true,\s*},\n/g,
		'',
	);

	writeFileSync(configPath, configContent);
	console.log('Updated app.config.ts');
} catch (error) {
	console.error('Failed to update app.config.ts:', error);
}

// Clean tRPC imports from specific files
for (const file of filesToClean) {
	const filePath = join(projectRoot, file);
	if (!existsSync(filePath)) continue;

	let content = readFileSync(filePath, 'utf-8');

	// Remove tRPC imports
	content = content.replace(
		/import\s+{[^}]*}\s+from\s+['"][^'"]*trpc[^'"]*['"];?\n/g,
		'',
	);
	content = content.replace(
		/import\s+.*\s+from\s+['"][^'"]*trpc[^'"]*['"];?\n/g,
		'',
	);

	// Remove tRPC usage (basic patterns)
	content = content.replace(/const\s+{[^}]*}\s*=\s*api\.[^;]*;\n/g, '');
	content = content.replace(/const\s+isConnected\s*=.*;\n/g, '');
	content = content.replace(/ReactQuery,\n/g, '');

	// Remove unused imports (basic)
	content = content.replace(
		/import\s+{[^}]*Icon[^}]*}\s+from\s+['"][^'"]*['"];?\n/g,
		'',
	);
	content = content.replace(
		/import\s+{[^}]*Card[^}]*}\s+from\s+['"][^'"]*['"];?\n/g,
		'',
	);

	// Remove the entire Card block
	content = content.replace(/<Card[^>]*>[\s\S]*?<\/Card>/g, '');

	writeFileSync(filePath, content);
	console.log(`Cleaned tRPC references in: ${file}`);
}

console.log('Cleanup complete. Run "bun install" to update dependencies.');
