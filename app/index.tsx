import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { useSplash } from '../lib/store/splash';

export default function SplashScreen() {
	const { isVisible } = useSplash();

	const router = useRouter();

	React.useEffect(() => {
		if (isVisible) return;

		router.navigate('/(stack)/(drawer)');
	}, [isVisible, router.navigate]);

	return (
		<View className="bg-red-500 h-50">
			<Text className="flex-1 text-center" variant="h1">
				AppIndex
			</Text>
		</View>
	);
}
