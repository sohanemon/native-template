import { View as SlotView } from '@rn-primitives/slot';
import type { AND } from '@ts-utilities/core';
import type * as React from 'react';
import { View as RNView } from 'react-native';
import Animated, { Keyframe } from 'react-native-reanimated';
import { withUniwind } from 'uniwind';
import {
	type AnimationType,
	DEFAULT_ANIMATION_CONFIGS,
} from '@/lib/config/variants/animation';

type ReanimatedProps<C extends React.ComponentType<any> = typeof RNView> = AND<
	[
		React.ComponentProps<C>,
		{
			children?: React.ReactNode;
			entering?: AnimationType;
			exiting?: AnimationType;
			delay?: number;
			duration?: number;
			as?: C;
			asChild?: boolean;
		},
	]
>;

type Phase = 'enter' | 'exit';

const getAnimation = ({
	delay,
	duration,
	phase,
	type = 'fade',
}: {
	phase: Phase;
	duration: number;
	delay: number;
	type: AnimationType;
}) => {
	const config = DEFAULT_ANIMATION_CONFIGS[type]?.[phase];
	return new Keyframe(config).duration(duration).delay(delay);
};

const AnimatedComp = <C extends React.ComponentType<any> = typeof RNView>({
	children,
	entering,
	exiting,
	delay = 0,
	duration = 300,
	as = RNView,
	asChild,
	...props
}: ReanimatedProps<C>) => {
	const Component = asChild ? SlotView : as;
	const AnimatedComp = Animated.createAnimatedComponent(Component);

	return (
		<AnimatedComp
			entering={
				entering
					? getAnimation({ duration, delay, type: entering, phase: 'enter' })
					: undefined
			}
			exiting={
				exiting
					? getAnimation({ duration, delay, type: exiting, phase: 'exit' })
					: undefined
			}
			{...props}
		>
			{children}
		</AnimatedComp>
	);
};

const Reanimated = withUniwind(AnimatedComp) as typeof AnimatedComp;

export { type AnimationType, Reanimated };
