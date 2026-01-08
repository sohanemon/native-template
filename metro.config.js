const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer.minifierConfig = {
	compress: {
		drop_console: true,
		drop_debugger: true,
	},
};

config.transformer.getTransformOptions = async () => ({
	transform: {
		experimentalImportSupport: true,
		inlineRequires: true,
	},
});

// NOTE: for .lottie file support
config.resolver.assetExts?.push('lottie');

const uniwindConfig = withUniwindConfig(config, {
	cssEntryFile: './styles/global.css',
	dtsFile: './types/uniwind-types.d.ts',
	extraThemes: [
		'ocean-light',
		'ocean-dark',
		'forest-light',
		'forest-dark',
		'sunset-light',
		'sunset-dark',
		'lavender-light',
		'lavender-dark',
	],
});

module.exports = uniwindConfig;
