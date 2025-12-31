import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { useResolveClassNames } from "uniwind";
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
