import { DrawerItem } from '@react-navigation/drawer';
import type {
	NavigationHelpers,
	ParamListBase,
} from '@react-navigation/native';
import type * as React from 'react';
import { View, type ViewProps } from 'react-native';
import { Icon } from '@/components/icon';
import { useTheme } from '@/lib/context/theme';
import { cn } from '@/lib/utils';
import { drawerItems } from '@/lib/constants/drawer';

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
				const [iconType, iconName] = item.icon.split('.') as [
					keyof typeof Icon,
					string,
				];

				return (
					<DrawerItem
						key={item.route}
						label={item.label}
						focused={currentRoute === item.route}
						activeTintColor={colors.primary}
						inactiveTintColor={colors.foreground}
						onPress={() => navigation.navigate(item.route)}
						icon={({ size, color }) => {
							const IconComponent = Icon[iconType] as React.ComponentType<{
								name: string;
								size: number;
								color: string;
							}>;

							return (
								<IconComponent name={iconName} size={size} color={color} />
							);
						}}
					/>
				);
			})}
		</View>
	);
}
