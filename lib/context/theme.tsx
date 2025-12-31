import type React from "react";
import { createContext, useCallback, useContext, useMemo } from "react";
import { Uniwind, useCSSVariable, useUniwind } from "uniwind";

export type ThemeName = ReturnType<typeof useUniwind>["theme"];

const COLORS = ["foreground", "background", "accent", "muted"] as const;

type ThemeContextType = {
	currentTheme: ThemeName;
	setTheme: (theme: ThemeName) => void;
	toggleTheme: () => void;
	colors: {
		[key in (typeof COLORS)[number]]: string;
	};
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const { theme } = useUniwind();

	const colorValues = useCSSVariable(COLORS.map((c) => `--${c}`));

	const colors = useMemo(
		() =>
			COLORS.reduce(
				(acc, key, index) => {
					const value = colorValues[index];

					acc[key] = typeof value === "string" ? value : String(value ?? "");

					return acc;
				},
				{} as ThemeContextType["colors"],
			),
		[colorValues],
	);

	const setTheme = useCallback((newTheme: ThemeName) => {
		Uniwind.setTheme(newTheme);
	}, []);

	const toggleTheme = useCallback(() => {
		Uniwind.setTheme(theme === "light" ? "dark" : "light");
	}, [theme]);

	const value = useMemo(
		() => ({
			currentTheme: theme,
			setTheme,
			toggleTheme,
			colors,
		}),
		[theme, setTheme, toggleTheme, colors],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}
	return context;
}
