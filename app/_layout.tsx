import '@/styles/global.css';
import { PortalHost } from '@rn-primitives/portal';
import { Slot } from 'expo-router';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { Providers } from '@/lib/context/providers';
import { useSplash } from '@/lib/store/splash';
import { cn } from '@/lib/utils';

export const unstable_settings = {
	initialRouteName: '(stack)',
};

export default function Layout() {
	const { isSplashVisible: isVisible } = useSplash();

	return (
		<View className={cn('flex-1', 'bg-background text-foreground')}>
			<Providers>
				{isVisible ? (
					<View className="flex-1 items-center justify-center">
						<LottieView
							source={require('@/assets/splash.json')}
							autoPlay
							resizeMode="contain"
							style={{
								width: 300,
								height: 300,
							}}
						/>
					</View>
				) : (
					<Slot />
				)}
				<PortalHost />
			</Providers>
		</View>
	);
}
