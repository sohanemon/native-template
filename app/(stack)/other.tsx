import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { Icon } from '@/components/icon';
import { Container } from '@/components/layout/container';
import { Text } from '@/components/ui/text';
import { api } from '@/lib/trpc/api';

export default function DrawerOther() {
	const { data } = api.info.lottieSplash.useQuery();
	return (
		<Container>
			<View className="flex flex-1 justify-center">
				<View className="mx-auto size-32">
					<LottieView
						source={data?.json}
						autoPlay
						resizeMode="cover"
						style={{
							width: '100%',
							height: '100%',
						}}
					/>
				</View>
				<View className="flex-row items-center justify-center gap-1 py-8">
					<Icon.Ionicons variant="muted" name="information-circle-outline" />
					<Text variant="muted">A Sample Lottie component</Text>
				</View>
			</View>
		</Container>
	);
}
