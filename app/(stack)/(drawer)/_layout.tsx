import { Drawer } from 'expo-router/drawer';
import { Icon } from '@/components/icon';
import { DrawerContents } from '@/components/layout/drawer/drawer-contents';
import { DrawerToggle } from '@/components/layout/drawer/drawer-toggle';
import { ThemeSelect } from '@/components/theme-select';
import { Text } from '@/components/ui/text';
import { useTheme } from '@/lib/context/theme';

export default function DrawerLayout() {
	const { colors } = useTheme();

	return (
		<Drawer
			screenOptions={{
				headerTintColor: colors.foreground,
				headerStyle: { backgroundColor: colors.background },
				headerRight: () => <ThemeSelect />,
				headerLeft: () => <DrawerToggle />,
				drawerStyle: { backgroundColor: colors.background },
				drawerActiveTintColor: colors.primary,
				drawerInactiveTintColor: colors.muted,
				headerShadowVisible: false,
				swipeEnabled: true,
			}}
			drawerContent={DrawerContents}
		>
			<Drawer.Screen
				name="index"
				options={{
					headerTitle: 'Home',
					drawerLabel: ({ color, focused }) => (
						<Text style={{ color: focused ? color : colors.foreground }}>
							Home
						</Text>
					),
					drawerIcon: ({ size, color, focused }) => (
						<Icon.Feather
							name="home"
							size={size}
							color={focused ? color : colors.foreground}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="(tabs)"
				options={{
					headerTitle: 'Tabs',
					drawerLabel: ({ color, focused }) => (
						<Text style={{ color: focused ? color : colors.foreground }}>
							Tabs
						</Text>
					),
					drawerIcon: ({ size, color, focused }) => (
						<Icon.MaterialIcons
							name="backup-table"
							size={size}
							color={focused ? color : colors.foreground}
						/>
					),
				}}
			/>
		</Drawer>
	);
}
