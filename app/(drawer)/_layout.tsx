import { Drawer } from "expo-router/drawer";
import { useResolveClassNames } from "uniwind";
import { Icon } from "@/components/icon";
import { ThemeSelect } from "@/components/theme-select";
import { Text } from "@/components/ui/text";
import { useTheme } from "@/lib/context/theme";

function DrawerLayout() {
	const { colors } = useTheme();

	const headerTitleStyle = useResolveClassNames(
		"font-semibold text-foreground",
	);

	return (
		<Drawer
			screenOptions={{
				headerTintColor: colors.foreground,
				headerStyle: { backgroundColor: colors.background },
				headerTitleStyle,
				headerRight: () => <ThemeSelect />,
				drawerStyle: { backgroundColor: colors.background },
				drawerIcon: () => <Icon.Ionicons name="chevron-down" />,
				drawerActiveTintColor: colors.primary,
				drawerInactiveTintColor: colors.muted,
			}}
		>
			<Drawer.Screen
				name="index"
				options={{
					headerTitle: "Home",
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
					headerTitle: "Tabs",
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

export default DrawerLayout;
