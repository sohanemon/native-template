import * as Haptics from "expo-haptics";
import { Platform, Text, View } from "react-native";
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

	return <Text>hello</Text>;
}
