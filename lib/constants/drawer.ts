// NOTE: Non drawer pages should start with '/'

export const drawerItems = [
	{ label: 'Home', route: 'index', icon: 'home' },
	{ label: 'Tabs', route: '(tabs)', icon: 'table' },
	{ label: 'Settings', route: '/(stack)/setting', icon: 'settings' },
] as const;
