import { View } from 'react-native';
import { Container } from '@/components/layout/container';
import { ThemeSelect } from '@/components/theme-select';
import { Text } from '@/components/ui/text';

export default function Setting() {
	return (
		<Container>
			<View className="flex-row items-center justify-between">
				<Text>Choose your preferred theme</Text>
				<ThemeSelect showTitle className="origin-right scale-75" />
			</View>
		</Container>
	);
}
