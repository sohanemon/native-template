import { View } from 'react-native';
import { Icon } from '@/components/icon';
import { Container } from '@/components/layout/container';
import { Img } from '@/components/ui/image';
import { Text } from '@/components/ui/text';

export default function DrawerOther() {
	return (
		<Container>
			<View className="flex flex-1 justify-center">
				<View className="mx-auto size-32">
					<Img src="/logo.png" />
				</View>
				<View className="flex-row items-center justify-center gap-1 py-8">
					<Icon.Ionicons variant="muted" name="information-circle-outline" />
					<Text variant="muted">A Sample image component</Text>
				</View>
			</View>
		</Container>
	);
}
