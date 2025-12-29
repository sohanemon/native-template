import type React from "react";
import { createContext, useCallback, useContext, useMemo } from "react";
import { Uniwind, useUniwind } from "uniwind";

export type ThemeName = ReturnType<typeof useUniwind>["theme"];

type AppThemeContextType = {
	currentTheme: ThemeName;
	setTheme: (theme: ThemeName) => void;
	toggleTheme: () => void;
};

const AppThemeContext = createContext<AppThemeContextType | undefined>(
	undefined,
);

export const AppThemeProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const { theme } = useUniwind();

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
		}),
		[theme, setTheme, toggleTheme],
	);

	return (
		<AppThemeContext.Provider value={value}>
			{children}
		</AppThemeContext.Provider>
	);
};

export function useAppTheme() {
	const context = useContext(AppThemeContext);
	if (!context) {
		throw new Error("useAppTheme must be used within AppThemeProvider");
	}
	return context;
}
