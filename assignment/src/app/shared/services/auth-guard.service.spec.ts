import { AuthGuardService } from './auth-guard.service';

describe('Service: AuthGuard', () => {
	let service: AuthGuardService;
	let authServiceMock: any;
	let routerMock: any;

	beforeEach(() => {
		authServiceMock = {
			isAuthenticated: jest.fn()
		};
		routerMock = {
			navigate: jest.fn()
		};

		service = new AuthGuardService (
			authServiceMock,
			routerMock
		);
    });
    
	describe('Test: canActivate', () => {
		it('should return true', () => {
			const spyCanActivate = jest.spyOn(authServiceMock, 'isAuthenticated').mockReturnValue(true);
			expect(authServiceMock.isAuthenticated()).toBe(true);
		});

		it('should return false', () => {
			const spyCanActivate = jest.spyOn(authServiceMock, 'isAuthenticated').mockReturnValue(false);
			expect(authServiceMock.isAuthenticated()).toBe(false);
			expect(routerMock.navigate).toBeDefined();
		});
	});

});