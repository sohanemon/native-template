import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { Icon } from '@/components/icon';

export const DrawerToggle = () => {
	const navigation = useNavigation();

	return (
		<Icon.FontAwesome6
			name="equals"
			className="pr-1.5 pl-3 text-foreground text-lg"
			onPress={() => {
				navigation.dispatch(DrawerActions.openDrawer());
			}}
		/>
	);
};
