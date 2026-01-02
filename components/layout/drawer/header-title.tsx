import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { Text } from '@/components/ui/text';

type HeaderTitleProps = {
	children: string;
};

export function HeaderTitle({ children }: HeaderTitleProps) {
	const navigation = useNavigation();

	return (
		<Pressable
			onPress={() => {
				navigation.dispatch(DrawerActions.openDrawer());
			}}
			className="py-2"
		>
			<Text variant="h4" className="font-semibold text-foreground">
				{children}
			</Text>
		</Pressable>
	);
}
