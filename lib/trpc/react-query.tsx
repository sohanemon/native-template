'use client';

import { type QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createQueryClient } from './query-client';
import { TRPCReactProvider } from './trpc-provider';

let clientQueryClientSingleton: QueryClient | undefined;

const getQueryClient = () => {
	if (typeof window === 'undefined') {
		// Server: always make a new query client
		return createQueryClient();
	}
	// Browser: use singleton pattern to keep the same query client
	clientQueryClientSingleton ??= createQueryClient();

	return clientQueryClientSingleton;
};

export const queryClient = getQueryClient();

export function ReactQuery({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<TRPCReactProvider client={queryClient}>{children}</TRPCReactProvider>
		</QueryClientProvider>
	);
}
