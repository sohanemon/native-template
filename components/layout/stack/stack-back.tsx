import { useNavigation } from 'expo-router';
import type { ViewProps } from 'react-native';
import { Icon } from '@/components/icon';
import { cn } from '@/lib/utils';

type StackBackProps = ViewProps;

export function StackBack({ className, ...props }: StackBackProps) {
	const navigation = useNavigation();

	return (
		<Icon.FontAwesome6
			name="chevron-left"
			className={cn('h-full w-5 text-foreground text-lg', className)}
			hitSlop={10}
			onPress={() => {
				navigation.goBack();
			}}
			{...props}
		/>
	);
}
