import { logout } from '../logout';
import 'jest-localstorage-mock';

describe('logout function', () => {
  it('clears the token from browser storage', () => {
    logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
	
  });
});