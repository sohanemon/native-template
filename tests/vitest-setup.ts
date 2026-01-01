import '@testing-library/jest-dom';
import { vi } from 'vitest';

// NOTE: Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation((query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(), // deprecated
		removeListener: vi.fn(), // deprecated
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});

// NOTE: Mock IntersectionObserver
global.IntersectionObserver = class MockIntersectionObserver {
	root: Element | null = null;
	rootMargin = '';
	thresholds: ReadonlyArray<number> = [];

	observe() {}

	unobserve() {}

	disconnect() {}

	takeRecords(): IntersectionObserverEntry[] {
		return [];
	}
	// biome-ignore lint/suspicious/noExplicitAny: mock class
} as any;

// NOTE: Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));
