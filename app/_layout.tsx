import '@/styles/global.css';
import { PortalHost } from '@rn-primitives/portal';
import { Slot } from 'expo-router';
import { View } from 'react-native';
import { Splash } from '@/components/splash';
import { Providers } from '@/lib/context/providers';
import { useSplash } from '@/lib/store/splash';
import { cn } from '@/lib/utils';

export const unstable_settings = {
	initialRouteName: '(stack)',
};

export default function Layout() {
	const { isSplashVisible: showSplash } = useSplash();

	return (
		// NOTE: bg is important, unless it can have white flickering on dark theme
		<View className={cn('flex-1', 'bg-background text-foreground')}>
			<Providers>
				{showSplash ? <Splash /> : <Slot />}
				<PortalHost />
			</Providers>
		</View>
	);
}
