import { Tabs } from 'expo-router/tabs';
import type * as React from 'react';
import { useTheme } from '@/lib/context/theme';

type TabsLayoutProps = React.ComponentProps<typeof Tabs> & {
	children?: React.ReactNode;
};

export function TabsLayout({
	children,
	screenOptions,
	...props
}: TabsLayoutProps) {
	const { colors } = useTheme();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: colors.background,
				},
				tabBarActiveTintColor: colors.primary,
				animation: 'shift',
				sceneStyle: {
					backgroundColor: colors.background,
				},
				...screenOptions,
			}}
			{...props}
		>
			{children}
		</Tabs>
	);
}
