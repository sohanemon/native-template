import { create } from 'zustand';

type CounterType = {
	count: number;
	direction: 'forward' | 'backward';
	setdirection: (direction: 'forward' | 'backward') => void;
	increment: () => void;
	decrement: () => void;
};

export const useCounter = create<CounterType>()((set) => ({
	count: 0,
	direction: 'forward',
	setdirection: (direction) => set({ direction }),
	increment: () =>
		set((state) => ({ count: state.count + 1, direction: 'forward' })),
	decrement: () =>
		set((state) => ({ count: state.count - 1, direction: 'backward' })),
}));
