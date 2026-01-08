import { Stack } from 'expo-router/stack';

import { StackLayout } from '@/components/layout/stack/stack-layout';

export default function () {
	return (
		<StackLayout>
			<Stack.Screen name="(drawer)" options={{ headerShown: false }} />
			<Stack.Screen name="other" options={{ headerTitle: 'Other Stack' }} />
			<Stack.Screen
				name="setting/index"
				options={{ headerTitle: 'Settings' }}
			/>
		</StackLayout>
	);
}
