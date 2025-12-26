const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const uniwindConfig = withUniwindConfig(config, {
	cssEntryFile: "./styles/global.css",
	dtsFile: "./types/uniwind-types.d.ts",
});

module.exports = uniwindConfig;
