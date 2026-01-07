import { create } from 'zustand';

type CounterType = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

export const useCounter = create<CounterType>()((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
}));
