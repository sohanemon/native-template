import { Text, View, type ViewProps } from 'react-native';
import { cn } from '@/lib/utils';

type OtherProps = ViewProps;

export function Other({ className, ...props }: OtherProps) {
	return (
		<View className={cn(className)} {...props}>
			<Text>DrawerOther</Text>
		</View>
	);
}
