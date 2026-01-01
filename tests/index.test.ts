import { describe, expect, it } from 'vitest';

describe('Example Test Suite', () => {
	it('should pass a basic test', () => {
		expect(2 + 2).toBe(4);
	});

	it('should handle string concatenation', () => {
		expect('hello' + ' ' + 'world').toBe('hello world');
	});
});
