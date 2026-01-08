import { DrawerItem } from '@react-navigation/drawer';
import type {
	NavigationHelpers,
	ParamListBase,
} from '@react-navigation/native';
import { type Route, useRouter } from 'expo-router';
import { View, type ViewProps } from 'react-native';
import { Icon } from '@/components/icon';
import { drawerItems } from '@/lib/constants/drawer';
import { useTheme } from '@/lib/context/theme';
import { cn } from '@/lib/utils';

type DrawerBodyProps = ViewProps & {
	currentRoute: string;
	navigation: NavigationHelpers<ParamListBase>;
};

export function DrawerBody({
	className,
	currentRoute,
	navigation,
	...props
}: DrawerBodyProps) {
	const { colors } = useTheme();
	const router = useRouter();

	const handlePress = (route: Route) => {
		if (route.startsWith('/')) {
			router.navigate(route);
		} else {
			navigation.navigate(route);
		}
	};

	return (
		<View className={cn(className)} {...props}>
			{drawerItems.map((item) => {
				return (
					<DrawerItem
						key={item.route}
						label={item.label}
						focused={currentRoute === item.route}
						activeTintColor={colors.primary}
						inactiveTintColor={colors.foreground}
						onPress={() => handlePress(item.route as Route)}
						icon={({ size, color }) => {
							return (
								<Icon.Feather name={item.icon} size={size} color={color} />
							);
						}}
					/>
				);
			})}
		</View>
	);
}
