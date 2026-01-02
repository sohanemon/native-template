import { Tabs } from 'expo-router/tabs';
import { Icon } from '@/components/icon';
import { useTheme } from '@/lib/context/theme';

export default function TabLayout() {
	const { colors } = useTheme();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: colors.background,
				},
				tabBarActiveTintColor: colors.primary,
				animation: 'none',
				sceneStyle: {
					backgroundColor: colors.background,
				},
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
