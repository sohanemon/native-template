import '@/styles/global.css';
import { PortalHost } from '@rn-primitives/portal';
import { Slot } from 'expo-router';
import { Providers } from '@/lib/context/providers';

export const unstable_settings = {
	initialRouteName: '(drawer)',
};

export default function Layout() {
	return (
		<Providers>
			<Slot />
			<PortalHost />
		</Providers>
	);
}
