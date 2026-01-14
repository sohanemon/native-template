import { Drawer } from 'expo-router/drawer';
import type * as React from 'react';

import { ThemeSelect } from '@/components/theme-select';
import { useTheme } from '@/lib/context/theme';
import { DrawerContents } from './drawer-contents';
import { DrawerToggle } from './drawer-toggle';
import { HeaderTitle } from './header-title';

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
			drawerContent={DrawerContents}
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
			{...props}
		>
			{children}
		</Drawer>
	);
}
