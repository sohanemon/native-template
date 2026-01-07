import { Directions, Gesture } from 'react-native-gesture-handler';
import { scheduleOnRN } from 'react-native-worklets';

export type SwipeDirection = 'left' | 'right' | 'up' | 'down';

export type SwipeGestureOptions = {
	numberOfPointers?: number;

	onLeft?: () => void; // from right to left
	onRight?: () => void; // from left to right
	onUp?: () => void; // from bottom to top
	onDown?: () => void; // from top to bottom
};

export function swipeGesture({
	numberOfPointers = 1,
	onLeft,
	onRight,
	onUp,
	onDown,
}: SwipeGestureOptions) {
	const gestures = [];

	if (onRight) {
		gestures.push(
			Gesture.Fling()
				.numberOfPointers(numberOfPointers)
				.direction(Directions.RIGHT)
				.onEnd(() => {
					'worklet';
					scheduleOnRN(onRight);
				}),
		);
	}

	if (onLeft) {
		gestures.push(
			Gesture.Fling()
				.numberOfPointers(numberOfPointers)
				.direction(Directions.LEFT)
				.onEnd(() => {
					'worklet';
					scheduleOnRN(onLeft);
				}),
		);
	}

	if (onDown) {
		gestures.push(
			Gesture.Fling()
				.numberOfPointers(numberOfPointers)
				.direction(Directions.DOWN)
				.onEnd(() => {
					'worklet';
					scheduleOnRN(onDown);
				}),
		);
	}

	if (onUp) {
		gestures.push(
			Gesture.Fling()
				.numberOfPointers(numberOfPointers)
				.direction(Directions.UP)
				.onEnd(() => {
					'worklet';
					scheduleOnRN(onUp);
				}),
		);
	}

	return gestures.length > 0 ? Gesture.Race(...gestures) : Gesture.Native();
}
