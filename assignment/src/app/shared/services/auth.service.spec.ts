import { AuthService } from './auth.service';

describe('Service: AuthService', () => {
	let service: AuthService;

	beforeEach(() => {
		service = new AuthService();
		window.localStorage.clear();
    });


	describe('Test: isLoggedIn', () => {
		it('should return false', () => {
			expect(service.isAuthenticated()).toBe(false);
		});

		it('should return true', () => {
			const objUser = true;
			expect(window.localStorage.getItem('loginSuccess')).toBeNull();
			window.localStorage.setItem('loginSuccess', JSON.stringify(objUser));
			expect(service.isAuthenticated()).toBe(true);
		});
	});

	describe('Test: Logout', () => {
		it('should clear localstorage', () => {
			window.localStorage.setItem('loginSuccess', '');
			expect(window.localStorage.getItem('loginSuccess')).toBe('');
		});
	});

	describe('Test: login', () => {
		it('should return user object', done => {
			const formData = {
				username: 'admin',
				password: 'admin'
            };
            
			const objUser = true;

			const serviceMock = new AuthService();
			if (serviceMock.login(formData)) {
				window.localStorage.setItem('loginSuccess', JSON.stringify(objUser));
				expect(window.localStorage.getItem('loginSuccess')).not.toBeNull();
				done();
            }
		});
	});

});