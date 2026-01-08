import { View } from 'react-native';
import { Container } from '@/components/layout/container';
import { ThemeSelect } from '@/components/theme-select';
import { Text } from '@/components/ui/text';

export default function Setting() {
	return (
		<Container>
			<View className="flex flex-1 justify-center gap-4">
				<View className="items-center">
					<Text className="text-2xl font-semibold">Settings</Text>
					<Text variant="muted">Choose your preferred theme</Text>
				</View>
				<View className="items-center">
					<ThemeSelect />
				</View>
			</View>
		</Container>
	);
}
