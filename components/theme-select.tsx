import * as Haptics from "expo-haptics";
import { useTheme } from "@/lib/context/theme";
import { Icon } from "./icon";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
} from "./ui/select";

export function ThemeSelect() {
	const { currentTheme, setTheme } = useTheme();

	function handleThemeChange(option?: { value: string; label: string }) {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
		if (
			option?.value &&
			(option?.value === "light" || option?.value === "dark")
		) {
			setTheme(option.value);
		}
	}

	return (
		<Select
			onValueChange={handleThemeChange}
			value={{
				value: currentTheme,
				label: currentTheme === "light" ? "Light" : "Dark",
			}}
		>
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
