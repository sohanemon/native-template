import { Drawer } from 'expo-router/drawer';

import { DrawerLayout } from '@/components/layout/drawer/drawer-layout';

export default function () {
	return (
		<DrawerLayout>
			<Drawer.Screen name="index" options={{ title: 'Home' }} />
			<Drawer.Screen name="(tabs)" options={{ title: 'Tabs' }} />
		</DrawerLayout>
	);
}
