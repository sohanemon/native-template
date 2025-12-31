import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { useCallback } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Typography } from "@/components/ui/typography";
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
						<Typography style={{ color: focused ? color : colors.foreground }}>
							Home
						</Typography>
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
						<Typography style={{ color: focused ? color : colors.foreground }}>
							Tabs
						</Typography>
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
