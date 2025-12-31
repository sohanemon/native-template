import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { useCallback } from "react";
import { useCSSVariable, useResolveClassNames } from "uniwind";
import { ThemeToggle } from "@/components/theme-toggle";
import { Typography } from "@/components/ui/typography";

function DrawerLayout() {
	const renderThemeToggle = useCallback(() => <ThemeToggle />, []);

	const ds = useResolveClassNames("bg-background");
	const [themeColorBackground, themeColorForeground] = useCSSVariable([
		"--background",
		"--foreground",
	]) as string[];

	return (
		<Drawer
			screenOptions={{
				headerTintColor: themeColorForeground,
				headerStyle: { backgroundColor: themeColorBackground },
				headerTitleStyle: {
					fontWeight: "600",
					color: themeColorForeground,
				},
				headerRight: renderThemeToggle,
				drawerStyle: { backgroundColor: themeColorBackground },
			}}
		>
			<Drawer.Screen
				name="index"
				options={{
					headerTitle: "Home",
					drawerLabel: ({ color, focused }) => (
						<Typography
							style={{ color: focused ? color : themeColorForeground }}
						>
							Home
						</Typography>
					),
					drawerIcon: ({ size, color, focused }) => (
						<Ionicons
							name="home-outline"
							size={size}
							color={focused ? color : themeColorForeground}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="(tabs)"
				options={{
					headerTitle: "Tabs",
					drawerLabel: ({ color, focused }) => (
						<Typography
							style={{ color: focused ? color : themeColorForeground }}
						>
							Tabs
						</Typography>
					),
					drawerIcon: ({ size, color, focused }) => (
						<MaterialIcons
							name="border-bottom"
							size={size}
							color={focused ? color : themeColorForeground}
						/>
					),
				}}
			/>
		</Drawer>
	);
}

export default DrawerLayout;
