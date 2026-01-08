import { Stack } from 'expo-router/stack';
import { StackBack } from '@/components/layout/stack/stack-back';
import { useTheme } from '@/lib/context/theme';

export default function StackLayout() {
	const { colors } = useTheme();

	return (
		<Stack
			screenOptions={{
				headerTintColor: colors.foreground,
				headerStyle: { backgroundColor: colors.background },
				animation: 'ios_from_right',
				headerBackVisible: false,
				headerLeft: () => <StackBack />,
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name="(drawer)" options={{ headerShown: false }} />
			<Stack.Screen name="other" options={{ headerTitle: 'Other Stack' }} />
			<Stack.Screen
				name="(stack)/setting"
				options={{ headerTitle: 'Settings' }}
			/>
		</Stack>
	);
}
