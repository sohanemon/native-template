import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { useCallback } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Text } from "@/components/ui/text";
import { useTheme } from "@/lib/context/theme";
import { useResolveClassNames } from "uniwind";

function DrawerLayout() {
	const renderThemeToggle = useCallback(() => <ThemeToggle />, []);
	const { colors } = useTheme();
	console.info("⚡[_layout.tsx:12] colors:", colors);
	const headerTitleStyle = useResolveClassNames(
		"font-semibold text-foreground",
	);

	return (
		<Drawer
			screenOptions={{
				headerTintColor: colors.foreground,
				headerStyle: { backgroundColor: colors.background },
				headerTitleStyle,
				headerRight: renderThemeToggle,
				drawerStyle: { backgroundColor: colors.background },
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
						<Ionicons
							name="home-outline"
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
						<MaterialIcons
							name="border-bottom"
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
