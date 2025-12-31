import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				headerStyle: {
					// backgroundColor: themeColorBackground,
				},
				// headerTintColor: themeColorForeground,
				headerTitleStyle: {
					// color: themeColorForeground,
					fontWeight: "600",
				},
				tabBarStyle: {
					// backgroundColor: themeColorBackground,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }: { color: string; size: number }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: "Explore",
					tabBarIcon: ({ color, size }: { color: string; size: number }) => (
						<Ionicons name="compass" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
