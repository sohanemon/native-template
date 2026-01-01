import { View } from 'react-native';
import { Container } from '@/components/layout/container';
import { Icon } from '@/components/icon';
import { Img } from '@/components/ui/image';
import { Text } from '@/components/ui/text';

export default function DrawerOther() {
	return (
		<Container>
			<View className="flex flex-1 justify-center">
				<Img src="/adaptive-icon.png" height={300} />
				<View className="flex-row items-center justify-center gap-1 py-8">
					<Icon.Ionicons variant="muted" name="information-circle-outline" />
					<Text variant="muted">A Sample image component</Text>
				</View>
			</View>
		</Container>
	);
}
