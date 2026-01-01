type ProviderType = React.ComponentType<{ children: React.ReactNode }>;

export function stackProviders(providers: ProviderType[]) {
	return function Providers({ children }: { children: React.ReactNode }) {
		return providers.reduceRight((acc, Provider, idx) => {
			return (
				<Provider key={Provider.displayName ?? `Provider-${idx}`}>
					{acc}
				</Provider>
			);
		}, children);
	};
}
