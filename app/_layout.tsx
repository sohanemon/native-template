import '@/styles/global.css';
import { PortalHost } from '@rn-primitives/portal';
import { Slot } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useColorScheme, View } from 'react-native';
import { Providers } from '@/lib/context/providers';
import { ThemeProvider } from '@/lib/context/theme';
import { useSplash } from '@/lib/store/splash';
import { cn } from '@/lib/utils';

export const unstable_settings = {
	initialRouteName: '(stack)',
};

export default function Layout() {
	const { isVisible } = useSplash();
	const colorScheme = useColorScheme();

	if (isVisible)
		return (
			<ThemeProvider>
				<View
					className={cn(
						'flex-1 items-center justify-center',
						colorScheme === 'dark' ? 'bg-black' : 'bg-white',
					)}
				>
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
			</ThemeProvider>
		);
	return (
		<Providers>
			<Slot />
			<PortalHost />
		</Providers>
	);
}
