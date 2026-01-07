import { create } from 'zustand';

type SplashType = { isVisible: boolean; hideSplash: () => void };

export const useSplash = create<SplashType>()((set) => ({
	isVisible: true,
	hideSplash: () => set({ isVisible: false }),
}));
