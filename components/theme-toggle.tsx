import * as Haptics from "expo-haptics";
import { Uniwind, useUniwind } from "uniwind";
import { Button } from "@/components/ui/button";
import { Icon } from "./icon";

export function ThemeToggle() {
	const { theme } = useUniwind();

	function toggleColorScheme() {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
		const newTheme = theme === "dark" ? "light" : "dark";
		Uniwind.setTheme(newTheme);
	}

	return (
		<Button
			onPress={toggleColorScheme}
			variant="ghost"
			size="icon"
			className="web:mr-5 size-9 rounded-full"
		>
			<Icon.Ionicons
				name="color-palette-outline"
				className="size-5 text-foreground text-lg"
			/>
		</Button>
	);
}
