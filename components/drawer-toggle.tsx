import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Icon } from "@/components/icon";

export const DrawerToggle = () => {
	const router = useNavigation();

	return (
		<Icon.FontAwesome6
			name="equals"
			className="pr-1.5 pl-3 text-foreground text-lg"
			onPress={() => {
				router.dispatch(DrawerActions.openDrawer());
			}}
		/>
	);
};
