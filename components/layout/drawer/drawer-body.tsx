import { DrawerItem } from '@react-navigation/drawer';
import type {
	NavigationHelpers,
	ParamListBase,
} from '@react-navigation/native';
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
						onPress={() => navigation.navigate(item.route)}
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
