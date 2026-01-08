import type { PropsWithChildren } from 'react';
import { ScrollView, View, type ViewProps } from 'react-native';
import Animated, { type AnimatedProps } from 'react-native-reanimated';
import { cn } from '@/lib/utils';

const AnimatedView = Animated.createAnimatedComponent(View);

type Props = AnimatedProps<ViewProps> & {
	className?: string;
};

export function Container({
	children,
	className,
	...props
}: PropsWithChildren<Props>) {
	return (
		<AnimatedView
			className={cn('flex-1 px-4 py-3 pb-safe', className)}
			{...props}
		>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				{children}
			</ScrollView>
		</AnimatedView>
	);
}
