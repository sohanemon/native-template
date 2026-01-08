import type { QueryClient } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { transformer } from '../utils';
import { api } from './api';

export function TRPCReactProvider({
	children,
	client,
}: {
	children: React.ReactNode;
	client: QueryClient;
}) {
	const [trpcClient] = useState(() =>
		api.createClient({
			links: [
				httpBatchLink({
					transformer,
					url: '/trpc',
				}),
			],
		}),
	);

	return (
		<api.Provider client={trpcClient} queryClient={client}>
			{children}
		</api.Provider>
	);
}
