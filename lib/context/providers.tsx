import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaListener } from "react-native-safe-area-context";
import { Uniwind } from "uniwind";
import { ReactQuery } from "../trpc/react-query";
import { ThemeProvider } from "./theme";

function CoreProviders({ children }: { children: React.ReactNode }) {
	return (
		<ReactQuery>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<KeyboardProvider>{children}</KeyboardProvider>
			</GestureHandlerRootView>
		</ReactQuery>
	);
}

export function Providers({
	children,
	onlyCoreProviders,
}: {
	children: React.ReactNode;
	onlyCoreProviders?: boolean;
}) {
	if (onlyCoreProviders) {
		return <CoreProviders>{children}</CoreProviders>;
	}

	return (
		<SafeAreaListener
			onChange={({ insets }) => {
				Uniwind.updateInsets(insets);
			}}
		>
			<CoreProviders>
				<ThemeProvider>{children}</ThemeProvider>
			</CoreProviders>
		</SafeAreaListener>
	);
}
