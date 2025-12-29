import * as Haptics from "expo-haptics";
import { Select } from "heroui-native";
import { Platform } from "react-native";
import { type ThemeName, useAppTheme } from "@/lib/context/app-theme-context";
import { Icon } from "./icon";
import { Typography } from "./ui/typography";

const THEME_OPTIONS = [
	{ value: "light", label: "Light", icon: "sunny" },
	{ value: "dark", label: "Dark", icon: "moon" },
	{ value: "catppuccin-mocha", label: "Mocha", icon: "cafe" },
	{ value: "dracula", label: "Dracula", icon: "skull" },
	{ value: "nord", label: "Nord", icon: "snow" },
	{ value: "tokyo-night", label: "Tokyo Night", icon: "moon" },
] as const;

export function ThemeToggle() {
	const { currentTheme, setTheme } = useAppTheme();

	const currentThemeOption =
		THEME_OPTIONS.find((option) => option.value === currentTheme) ||
		THEME_OPTIONS[0];

	return (
		<Select
			value={currentThemeOption}
			onValueChange={(value) => {
				if (Platform.OS === "ios") {
					Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
				}
				setTheme(value?.value as ThemeName);
			}}
		>
			<Select.Trigger className="border-0 bg-transparent p-2.5">
				<Icon.Ionicons
					name={"color-palette-outline"}
					size={20}
					className="text-foreground"
				/>
			</Select.Trigger>
			<Select.Portal>
				<Select.Overlay />
				<Select.Content width={160} placement="top" align="end">
					{THEME_OPTIONS.map((theme) => (
						<Select.Item
							key={theme.value}
							value={theme.value}
							label={theme.label}
							className="py-2"
						>
							<Icon.Ionicons
								name={theme.icon}
								size={16}
								className="mr-2 text-muted"
							/>
							<Typography>{theme.label}</Typography>
							<Select.ItemIndicator />
						</Select.Item>
					))}
				</Select.Content>
			</Select.Portal>
		</Select>
	);
}
