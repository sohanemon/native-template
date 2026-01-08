import { healthcheckRouter } from './routers/healthcheck';
import { infoRouter } from './routers/info';
import { createTRPCRouter } from './trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	healthcheck: healthcheckRouter,
	info: infoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
