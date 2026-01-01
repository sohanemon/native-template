import '@/styles/global.css';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router/stack';
import { StackBack } from '@/components/stack-back';
import { Providers } from '@/lib/context/providers';
import { useTheme } from '@/lib/context/theme';

export const unstable_settings = {
	initialRouteName: '(drawer)',
};

function StackLayout() {
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
		</Stack>
	);
}

export default function Layout() {
	return (
		<Providers>
			<StackLayout />
			<PortalHost />
		</Providers>
	);
}
