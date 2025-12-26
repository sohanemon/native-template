import { createTRPCRouter, publicProcedure } from "../trpc";

export const healthcheckRouter = createTRPCRouter({
	check: publicProcedure.query(() => {
		return {
			status: "OK",
			timestamp: new Date().toISOString(),
		};
	}),
});
