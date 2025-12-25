import { postRouter } from "./routers/post";
import { createTRPCRouter, publicProcedure } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	post: postRouter,
	healthCheck: publicProcedure.query(() => {
		console.info("⚡[index.ts:6] :");
		return "OK";
	}),
});

// export type definition of API
export type AppRouter = typeof appRouter;
