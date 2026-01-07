import { Drawer } from 'expo-router/drawer';
import { DrawerContents } from '@/components/layout/drawer/drawer-contents';
import { DrawerToggle } from '@/components/layout/drawer/drawer-toggle';
import { HeaderTitle } from '@/components/layout/drawer/header-title';
import { ThemeSelect } from '@/components/theme-select';
import { drawerItems } from '@/lib/constants/drawer';
import { useTheme } from '@/lib/context/theme';

export default function DrawerLayout() {
	const { colors } = useTheme();

	return (
		<Drawer
			screenOptions={{
				headerTintColor: colors.foreground,
				headerTitle: HeaderTitle,
				headerRight: ThemeSelect,
				headerLeft: DrawerToggle,
				headerShadowVisible: false,
				swipeEnabled: true,
				headerStyle: { backgroundColor: colors.background },
				drawerStyle: { backgroundColor: colors.background },
				drawerType: 'slide',
				drawerPosition: 'left',
			}}
			drawerContent={DrawerContents}
		>
			{drawerItems.map((item) => (
				<Drawer.Screen
					key={item.route}
					name={item.route}
					options={{
						title: item.label,
					}}
				/>
			))}
		</Drawer>
	);
}
