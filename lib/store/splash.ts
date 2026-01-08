import { create } from 'zustand';

type SplashType = { isSplashVisible: boolean; hideSplash: () => void };

export const useSplash = create<SplashType>()((set) => ({
	isSplashVisible: true,
	hideSplash: () => set({ isSplashVisible: false }),
}));
