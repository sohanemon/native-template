import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/root';
import { createTRPCContext } from '@/server/trpc';

const createContext = async (req: Request) => {
	return createTRPCContext({
		headers: req.headers,
	});
};

const handler = (req: Request) =>
	fetchRequestHandler({
		endpoint: '/trpc',
		req,
		router: appRouter,
		createContext: () => createContext(req),
		onError:
			process.env.NODE_ENV === 'development'
				? ({ path, error }) => {
						console.error(
							`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
						);
					}
				: undefined,
	});

export { handler as GET, handler as POST };
