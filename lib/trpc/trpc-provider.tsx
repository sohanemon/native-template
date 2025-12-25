import type { QueryClient } from "@tanstack/react-query";
import { httpBatchLink, httpLink, loggerLink } from "@trpc/client";
import { useState } from "react";
import SuperJSON from "superjson";
import { transformer } from "../utils";
import { api } from "./api";

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
				loggerLink({
					enabled: (op) =>
						process.env.NODE_ENV === "development" ||
						(op.direction === "down" && op.result instanceof Error),
				}),
				httpBatchLink({
					transformer,
					url: "http://localhost:8081/api/trpc",
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
