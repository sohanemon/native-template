import { useNavigation } from 'expo-router';
import type { ViewProps } from 'react-native';
import { cn } from '@/lib/utils';
import { Icon } from './icon';

type StackBackProps = ViewProps;

export function StackBack({ className, ...props }: StackBackProps) {
	const router = useNavigation();

	return (
		<Icon.FontAwesome6
			name="chevron-left"
			className={cn('h-full w-5 text-foreground text-lg', className)}
			hitSlop={10}
			onPress={() => {
				router.goBack();
			}}
			{...props}
		/>
	);
}
