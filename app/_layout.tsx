import "@/global.css";
import { Stack } from "expo-router";
import { Providers } from "@/lib/context/providers";

export const unstable_settings = {
	initialRouteName: "(drawer)",
};

function StackLayout() {
	return (
		<Stack screenOptions={{}}>
			<Stack.Screen name="(drawer)" options={{ headerShown: false }} />
		</Stack>
	);
}

export default function Layout() {
	return (
		<Providers>
			<StackLayout />
		</Providers>
	);
}
