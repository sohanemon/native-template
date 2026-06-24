import type {
	NavigationHelpers,
	ParamListBase,
} from '@react-navigation/native';
import { type Route, useRouter } from 'expo-router';
import { Pressable, View, type ViewProps } from 'react-native';
import { Icon } from '@/components/icon';
import { Text } from '@/components/ui/text';
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
				const focused = currentRoute === item.route;

				return (
					<Pressable
						className={cn(
							'mx-2 flex-row items-center gap-3 rounded-lg px-3 py-2.5',
							focused ? 'bg-primary/10' : ''
						)}
						key={item.route}
						onPress={() => handlePress(item.route as Route)}
					>
						<Icon.Feather
							color={focused ? colors.primary : colors.foreground}
							name={item.icon}
							size={20}
						/>
						<Text
							className={cn(
								'text-base',
								focused
									? 'font-semibold text-primary'
									: 'font-normal text-foreground'
							)}
						>
							{item.label}
						</Text>
					</Pressable>
				);
			})}
		</View>
	);
}
