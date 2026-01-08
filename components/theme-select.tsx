import * as Haptics from 'expo-haptics';
import type { ViewProps } from 'react-native';
import { ScrollView } from 'react-native';
import { type ThemeName, useTheme } from '@/lib/context/theme';
import { cn } from '@/lib/utils';
import { Icon } from './icon';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from './ui/select';

const THEMES = [
	{ value: 'light' as const, label: 'Light' },
	{ value: 'dark' as const, label: 'Dark' },
	{ value: 'ocean-light' as const, label: 'Ocean Light' },
	{ value: 'ocean-dark' as const, label: 'Ocean Dark' },
	{ value: 'forest-light' as const, label: 'Forest Light' },
	{ value: 'forest-dark' as const, label: 'Forest Dark' },
	{ value: 'sunset-light' as const, label: 'Sunset Light' },
	{ value: 'sunset-dark' as const, label: 'Sunset Dark' },
	{ value: 'lavender-light' as const, label: 'Lavender Light' },
	{ value: 'lavender-dark' as const, label: 'Lavender Dark' },
];

type ThemeSelectProps = ViewProps & { showTitle?: boolean };

export function ThemeSelect({
	className,
	showTitle,
	...props
}: ThemeSelectProps) {
	const { currentTheme, setTheme } = useTheme();

	function handleThemeChange(option?: { value: string; label: string }) {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
		if (option?.value && THEMES.some((t) => t.value === option.value)) {
			setTheme(option.value as ThemeName);
		}
	}

	return (
		<Select
			onValueChange={handleThemeChange}
			value={{
				value: currentTheme,
				label:
					THEMES.find((t) => t.value === currentTheme)?.label || currentTheme,
			}}
		>
			<SelectTrigger
				icon={false}
				className={cn('h-fit w-fit', !showTitle && 'border-0', className)}
				{...props}
			>
				<Icon.Ionicons
					name="color-palette-outline"
					className="text-2xl text-foreground"
				/>
				{showTitle && (
					<SelectValue className="text-base" placeholder={currentTheme} />
				)}
			</SelectTrigger>
			<SelectContent align="end">
				<ScrollView className="max-h-96">
					<SelectGroup>
						<SelectLabel>Classic</SelectLabel>
						{THEMES.slice(0, 2).map((theme) => (
							<SelectItem
								key={theme.value}
								label={theme.label}
								value={theme.value}
							/>
						))}
						<SelectLabel>Ocean</SelectLabel>
						{THEMES.slice(2, 4).map((theme) => (
							<SelectItem
								key={theme.value}
								label={theme.label}
								value={theme.value}
							/>
						))}
						<SelectLabel>Forest</SelectLabel>
						{THEMES.slice(4, 6).map((theme) => (
							<SelectItem
								key={theme.value}
								label={theme.label}
								value={theme.value}
							/>
						))}
						<SelectLabel>Sunset</SelectLabel>
						{THEMES.slice(6, 8).map((theme) => (
							<SelectItem
								key={theme.value}
								label={theme.label}
								value={theme.value}
							/>
						))}
						<SelectLabel>Lavender</SelectLabel>
						{THEMES.slice(8, 10).map((theme) => (
							<SelectItem
								key={theme.value}
								label={theme.label}
								value={theme.value}
							/>
						))}
					</SelectGroup>
				</ScrollView>
			</SelectContent>
		</Select>
	);
}
