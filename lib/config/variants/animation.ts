export type AnimationType =
	| 'fade'
	| 'slide-up'
	| 'slide-down'
	| 'slide-left'
	| 'slide-right'
	| 'scale';

type Phase = 'enter' | 'exit';

export const DEFAULT_ANIMATION_CONFIGS: Record<
	AnimationType,
	Record<Phase, any>
> = {
	'slide-up': {
		enter: {
			'0': {
				transform: [{ translateY: 30 }],
				opacity: 0,
			},
			'100': {
				transform: [{ translateY: 0 }],
				opacity: 1,
			},
		},
		exit: {
			'0': {
				transform: [{ translateY: 0 }],
				opacity: 1,
			},
			'100': {
				transform: [{ translateY: 30 }],
				opacity: 0,
			},
		},
	},
	'slide-down': {
		enter: {
			'0': {
				transform: [{ translateY: -30 }],
				opacity: 0,
			},
			'100': {
				transform: [{ translateY: 0 }],
				opacity: 1,
			},
		},
		exit: {
			'0': {
				transform: [{ translateY: 0 }],
				opacity: 1,
			},
			'100': {
				transform: [{ translateY: -30 }],
				opacity: 0,
			},
		},
	},
	'slide-left': {
		enter: {
			'0': {
				transform: [{ translateX: 30 }],
				opacity: 0,
			},
			'100': {
				transform: [{ translateX: 0 }],
				opacity: 1,
			},
		},
		exit: {
			'0': {
				transform: [{ translateX: 0 }],
				opacity: 1,
			},
			'100': {
				transform: [{ translateX: 30 }],
				opacity: 0,
			},
		},
	},
	'slide-right': {
		enter: {
			'0': {
				transform: [{ translateX: -30 }],
				opacity: 0,
			},
			'100': {
				transform: [{ translateX: 0 }],
				opacity: 1,
			},
		},
		exit: {
			'0': {
				transform: [{ translateX: 0 }],
				opacity: 1,
			},
			'100': {
				transform: [{ translateX: -30 }],
				opacity: 0,
			},
		},
	},
	scale: {
		enter: {
			'0': {
				transform: [{ scale: 0.8 }],
				opacity: 0,
			},
			'100': {
				transform: [{ scale: 1 }],
				opacity: 1,
			},
		},
		exit: {
			'0': {
				transform: [{ scale: 1 }],
				opacity: 1,
			},
			'100': {
				transform: [{ scale: 0.8 }],
				opacity: 0,
			},
		},
	},
	fade: {
		enter: {
			'0': {
				opacity: 0,
				transform: [{ scale: 0.95 }],
			},
			'100': {
				opacity: 1,
				transform: [{ scale: 1 }],
			},
		},
		exit: {
			'0': {
				opacity: 1,
				transform: [{ scale: 1 }],
			},
			'100': {
				opacity: 0,
				transform: [{ scale: 0.95 }],
			},
		},
	},
};
