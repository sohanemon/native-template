import { Drawer } from 'expo-router/drawer';
import type * as React from 'react';

import { ThemeSelect } from '@/components/theme-select';
import { useTheme } from '@/lib/context/theme';
import { HeaderTitle } from './header-title';
import { DrawerToggle } from './drawer-toggle';
import { DrawerContents } from './drawer-contents';

type DrawerLayoutProps = React.ComponentProps<typeof Drawer> & {
	children?: React.ReactNode;
	showThemeSelect?: boolean;
};

export function DrawerLayout({
	children,
	screenOptions,
	showThemeSelect = true,
	...props
}: DrawerLayoutProps) {
	const { colors } = useTheme();

	return (
		<Drawer
			screenOptions={{
				headerTintColor: colors.foreground,
				headerTitle: HeaderTitle,
				headerRight: showThemeSelect ? () => <ThemeSelect /> : undefined,
				headerLeft: DrawerToggle,
				headerShadowVisible: false,
				swipeEnabled: true,
				drawerType: 'slide',
				drawerPosition: 'left',
				headerStyle: { backgroundColor: colors.background },
				drawerStyle: { backgroundColor: colors.background, width: '80%' },
				sceneStyle: {
					backgroundColor: colors.background,
				},
				...screenOptions,
			}}
			drawerContent={DrawerContents}
			{...props}
		>
			{children}
		</Drawer>
	);
}
