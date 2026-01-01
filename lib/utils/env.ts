import { Platform } from 'react-native';

export function getEnv() {
	return {
		env: __DEV__ ? 'development' : 'production',
		os: Platform.OS,
	};
}
