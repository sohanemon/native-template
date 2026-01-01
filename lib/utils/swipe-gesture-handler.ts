import { Gesture } from 'react-native-gesture-handler';
import { scheduleOnRN } from 'react-native-worklets';

export type SwipeDirection = 'left' | 'right' | 'up' | 'down';

export type SwipeGestureOptions = {
	threshold?: number;
	velocityThreshold?: number;
	lockAxis?: boolean;

	onLeft?: () => void; // from right to left
	onRight?: () => void; // from left to right
	onUp?: () => void; // from bottom to top
	onDown?: () => void; // from top to bottom
};

export function swipeGesture({
	threshold = 50,
	velocityThreshold = 0,
	lockAxis = true,
	onLeft,
	onRight,
	onUp,
	onDown,
}: SwipeGestureOptions) {
	return Gesture.Pan().onEnd((e) => {
		'worklet';

		const x = e.translationX;
		const y = e.translationY;

		const absX = x < 0 ? -x : x;
		const absY = y < 0 ? -y : y;

		// NOTE: Axis-locked (fast path)
		if (lockAxis) {
			if (absX > absY) {
				if (absX < threshold) return;
				if (velocityThreshold && Math.abs(e.velocityX) < velocityThreshold)
					return;

				if (x > 0 && onRight) scheduleOnRN(onRight);
				else if (x < 0 && onLeft) scheduleOnRN(onLeft);
				return;
			}

			if (absY < threshold) return;
			if (velocityThreshold && Math.abs(e.velocityY) < velocityThreshold)
				return;

			if (y > 0 && onDown) scheduleOnRN(onDown);
			else if (y < 0 && onUp) scheduleOnRN(onUp);
			return;
		}

		// NOTE: No axis lock
		if (
			absX >= threshold &&
			(!velocityThreshold || Math.abs(e.velocityX) >= velocityThreshold)
		) {
			if (x > 0 && onRight) scheduleOnRN(onRight);
			else if (x < 0 && onLeft) scheduleOnRN(onLeft);
		}

		if (
			absY >= threshold &&
			(!velocityThreshold || Math.abs(e.velocityY) >= velocityThreshold)
		) {
			if (y > 0 && onDown) scheduleOnRN(onDown);
			else if (y < 0 && onUp) scheduleOnRN(onUp);
		}
	});
}
