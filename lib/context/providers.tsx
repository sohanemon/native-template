import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaListener } from "react-native-safe-area-context";
import { Uniwind } from "uniwind";
import { ReactQuery } from "../trpc/react-query";
import { stackProviders } from "../utils/stack-provider";
import { ThemeProvider } from "./theme";

export const Providers = stackProviders([
	function GestureHandler({ children }) {
		return (
			<GestureHandlerRootView style={{ flex: 1 }}>
				{children}
			</GestureHandlerRootView>
		);
	},
	function SafeAreaHandler({ children }) {
		return (
			<SafeAreaListener
				onChange={({ insets }) => {
					Uniwind.updateInsets(insets);
				}}
			>
				{children}
			</SafeAreaListener>
		);
	},
	ThemeProvider,
	KeyboardProvider,
	ReactQuery,
]);
