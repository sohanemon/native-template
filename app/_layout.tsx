import '@/styles/global.css';
import { PortalHost } from '@rn-primitives/portal';
import { Slot } from 'expo-router';
import { Providers } from '@/lib/context/providers';

export const unstable_settings = {
	initialRouteName: '(stack)',
};

// SplashScreen.preventAutoHideAsync();
// SplashScreen.setOptions({ duration: 500, fade: true });

export default function Layout() {
	return (
		<Providers>
			<Slot />
			<PortalHost />
		</Providers>
	);
}
