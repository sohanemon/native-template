import { Tabs } from 'expo-router/tabs';
import { Icon } from '@/components/icon';
import { useTheme } from '@/lib/context/theme';

export default function TabLayout() {
	const { colors } = useTheme();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				headerStyle: {
					backgroundColor: colors.background,
				},
				headerTintColor: colors.foreground,
				headerTitleStyle: {
					color: colors.foreground,
					fontWeight: '600',
				},
				tabBarStyle: {
					backgroundColor: colors.background,
				},
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: colors.foreground + 80,
				animation: 'shift',
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, size }: { color: string; size: number }) => (
						<Icon.Feather name="home" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: 'Explore',
					tabBarIcon: ({ color, size }: { color: string; size: number }) => (
						<Icon.Feather name="compass" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
