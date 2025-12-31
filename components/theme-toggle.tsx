import * as Haptics from "expo-haptics";
import { View } from "react-native";
import { Uniwind, useUniwind } from "uniwind";
import { Button } from "@/components/ui/button";
import { Icon } from "./icon";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

export function ThemeToggle() {
	const { theme } = useUniwind();

	function toggleColorScheme() {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
		const newTheme = theme === "dark" ? "light" : "dark";
		Uniwind.setTheme(newTheme);
	}

	return (
		<Select onValueChange={toggleColorScheme}>
			<SelectTrigger icon={false} className="w-fit border-0">
				<Icon.Ionicons
					name="color-palette-outline"
					className="text-foreground text-lg"
				/>
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Themes</SelectLabel>
					<SelectItem label="Light" value="light" />
					<SelectItem label="Dark" value="dark" />
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
