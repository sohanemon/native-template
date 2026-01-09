import { assetRouter } from './routers/asset';
import { healthcheckRouter } from './routers/healthcheck';
import { createTRPCRouter } from './trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /server/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	healthcheck: healthcheckRouter,
	asset: assetRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
