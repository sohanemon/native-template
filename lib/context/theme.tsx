import * as React from 'react';
import { StatusBar } from 'react-native';
import { Uniwind, useCSSVariable, useUniwind } from 'uniwind';
import { useStorageState } from '../hooks/useStorageState';
import { SplashScreen } from 'expo-router';

export type ThemeName = ReturnType<typeof useUniwind>['theme'];

const COLORS = [
	'foreground',
	'background',
	'accent',
	'muted',
	'primary',
	'primary-foreground',
	'secondary',
	'secondary-foreground',
	'card',
	'card-foreground',
	'popover',
	'popover-foreground',
	'destructive',
	'border',
	'input',
	'ring',
] as const;

type ThemeContextType = {
	currentTheme: ThemeName;
	setTheme: (theme: ThemeName) => void;
	colorScheme: 'light' | 'dark';
	colors: {
		[key in (typeof COLORS)[number]]: string;
	};
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
	undefined,
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const { theme: defaultValue } = useUniwind();
	const [storedTheme, setStoredTheme] = useStorageState<ThemeName>(
		'app-theme',
		{
			defaultValue,
		},
	);

	const colorValues = useCSSVariable(COLORS.map((c) => `--color-${c}`));

	const colorScheme: ThemeContextType['colorScheme'] = React.useMemo(
		() => (storedTheme?.includes('dark') ? 'dark' : 'light'),
		[storedTheme],
	);

	const colors = React.useMemo(
		() =>
			COLORS.reduce(
				(acc, key, index) => {
					const value = colorValues[index];

					acc[key] = typeof value === 'string' ? value : String(value ?? '');

					return acc;
				},
				{} as ThemeContextType['colors'],
			),
		[colorValues],
	);

	const setTheme = React.useCallback(
		async (newTheme: ThemeName) => {
			await setStoredTheme(newTheme);
		},
		[setStoredTheme],
	);

	React.useEffect(() => {
		if (storedTheme) {
			Uniwind.setTheme(storedTheme);

			StatusBar.setBarStyle(
				`${colorScheme === 'dark' ? 'light' : 'dark'}-content`,
			);

			SplashScreen.hideAsync();
		}
	}, [storedTheme, colorScheme]);

	const value = React.useMemo(
		() => ({
			currentTheme: storedTheme,
			setTheme,
			colors,
			colorScheme,
		}),
		[storedTheme, setTheme, colors, colorScheme],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export function useTheme() {
	const context = React.useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within ThemeProvider');
	}
	return context;
}
