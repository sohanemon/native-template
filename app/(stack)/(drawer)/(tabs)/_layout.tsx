import { Tabs } from 'expo-router/tabs';

import { Icon } from '@/components/icon';
import { TabsLayout } from '@/components/layout/tabs/tabs-layout';

export default function () {
	return (
		<TabsLayout>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, size }: { color: string; size: number }) => (
						<Icon.Feather name="home" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: 'Explore',
					tabBarIcon: ({ color, size }: { color: string; size: number }) => (
						<Icon.Feather name="compass" size={size} color={color} />
					),
				}}
			/>
		</TabsLayout>
	);
}
