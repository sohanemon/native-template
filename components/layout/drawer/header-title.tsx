import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { Text } from '@/components/ui/text';

type HeaderTitleProps = {
	children: string;
};

export function HeaderTitle({ children }: HeaderTitleProps) {
	const navigation = useNavigation();

	return (
		<Pressable
			className="py-2"
			onPress={() => {
				navigation.dispatch(DrawerActions.openDrawer());
			}}
		>
			<Text className="font-semibold text-foreground" variant="h4">
				{children}
			</Text>
		</Pressable>
	);
}
