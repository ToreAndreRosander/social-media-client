import { login } from '../login';
import 'jest-localstorage-mock';

// Mock the fetch function for testing
global.fetch = jest.fn(() =>
	Promise.resolve({
		ok: true,
		json: () => Promise.resolve({ accessToken: 'mock-token' }),
	})
);

describe('login function', () => {
	it('fetches and stores a token in browser storage', async () => {
		const email = 'test@example.com';
		const password = 'password';

		const profile = await login(email, password);

		// Check that fetch was called with the correct URL and payload
		expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/social/auth/login'), {
			method: 'post',
			body: JSON.stringify({ email, password }),
			headers: expect.any(Object),
		});

		// Check that the token is stored in browser storage as a string
		expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));

		// Check that the token is removed from the profile
		expect(profile.accessToken).toBeUndefined();
	});

	it('throws an error for non-successful responses', async () => {
		// Mock the fetch function for a non-successful response
		global.fetch = jest.fn(() => Promise.resolve({ ok: false, statusText: 'Unauthorized' }));

		const email = 'test@example.com';
		const password = 'password';

		try {
			await login(email, password);
		} catch (error) {
			// Check that it throws an error with the correct message
			expect(error.message).toBe('Unauthorized');
		}
	});
});