import type { ConfigContext, ExpoConfig } from 'expo/config';
import packageJson from './package.json';

export const config: ExpoConfig = {
	name: 'Native Template',
	description: packageJson.description,
	slug: packageJson.name,
	version: packageJson.version,
	orientation: 'portrait',
	icon: './assets/icons/adaptive-icon.png',
	scheme: packageJson.name,
	userInterfaceStyle: 'automatic',
	newArchEnabled: true,
	ios: {
		supportsTablet: true,
		bundleIdentifier: 'com.sohanemon.nativetemplate',
		infoPlist: {
			ITSAppUsesNonExemptEncryption: false,
		},
		icon: {
			light: './assets/icons/ios-light.png',
			dark: './assets/icons/ios-dark.png',
			tinted: './assets/icons/ios-tinted.png',
		},
	},
	android: {
		adaptiveIcon: {
			backgroundColor: '#E6F4FE',
			foregroundImage: './assets/icons/adaptive-icon.png',
			monochromeImage: './assets/icons/adaptive-icon.png',
		},
		edgeToEdgeEnabled: true,
		package: 'com.sohanemon.nativetemplate',
	},
	web: {
		output: 'server',
		bundler: 'metro',
		favicon: './assets/favicon.png',
	},
	plugins: [
		[
			'expo-router',
			{
				unstable_useServerMiddleware: true,
				origin: 'https://native-template.vercel.app',
			},
		],
		[
			'expo-splash-screen',
			{
				image: './assets/icons/splash-icon-dark.png',
				imageWidth: 200,
				resizeMode: 'contain',
				backgroundColor: '#ffffff',
				dark: {
					image: './assets/icons/splash-icon-light.png',
					backgroundColor: '#000000',
				},
			},
		],
	],
	experiments: {
		typedRoutes: true,
		reactCompiler: true,
	},
	updates: { assetPatternsToBeBundled: ['assets/static/**'] },
	extra: {
		router: {
			unstable_useServerMiddleware: true,
		},
		eas: {
			projectId: '003e3a84-f6d1-4c5f-9451-5be32b0c90f8',
		},
	},
};

export default ({ config: defaultConfig }: ConfigContext): ExpoConfig => ({
	...defaultConfig,
	...config,
});
