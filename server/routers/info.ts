import { createTRPCRouter, publicProcedure } from '../trpc';

export const infoRouter = createTRPCRouter({
	lottieSplash: publicProcedure.query(() => {
		return {
			json: require('@/assets/animations/splash.json'),
		};
	}),
});
