const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

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
