import { HeroUINativeProvider } from "heroui-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { AppThemeProvider } from "@/contexts/app-theme-context";
import { ReactQuery } from "../trpc/react-query";

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
		<CoreProviders>
			<AppThemeProvider>
				<HeroUINativeProvider>{children}</HeroUINativeProvider>
			</AppThemeProvider>
		</CoreProviders>
	);
}
