import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let authServiceMock: any;
	let formBuilderMock: FormBuilder;
	let routerMock: any;
	let storeMock: any;

	beforeEach(() => {
		authServiceMock = {
			login: jest.fn(),
			isAuthenticated: jest.fn()
		};
		formBuilderMock = new FormBuilder();
		routerMock = jest.fn();
		component = new LoginComponent(
			formBuilderMock,
			routerMock,
			authServiceMock,
			storeMock
		);
		component.ngOnInit();
	});

	describe('Test: ngOnInit', () => {
		it('should initialize loginForm', () => {
			const loginForm = {
				username: '',
				password: ''
			};
			expect(component.loginForm.value).toEqual(loginForm);
		});
	});

	describe('Test: Login Form', () => {
		it('should invalidate the form', () => {
			component.loginForm.controls.username.setValue('');
			component.loginForm.controls.password.setValue('');
			expect(component.loginForm.valid).toBeFalsy();
		});

		it('should validate the form', () => {
			component.loginForm.controls.username.setValue('admin');
			component.loginForm.controls.password.setValue('admin');
			expect(component.loginForm.valid).toBeTruthy();
		});
	});

	describe('Test: Form invalid', () => {
		it('should not call loginUser', () => {
      		component.loginForm.controls.username.setValue('');
			component.loginForm.controls.password.setValue('');
			component.onSubmit();
			expect(authServiceMock.login).not.toHaveBeenCalled();
		});
	});

	describe('Test: Form valid', () => {
		it('should call loginUser', () => {
			const formData = {
				username: 'admin',
				password: 'admin'
			};
			const spyloginUser = jest.spyOn(authServiceMock, 'login').mockReturnValue(true);
			expect(authServiceMock.login(formData)).toBe(true);
			expect(spyloginUser).toHaveBeenCalledWith(formData);
		});
	});

});