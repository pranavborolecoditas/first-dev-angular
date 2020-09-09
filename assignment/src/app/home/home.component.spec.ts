import { HomeComponent } from "./home.component";

describe('HomeComponent', () => {
  let component: HomeComponent;
	let homeServiceMock: any;
	let clothServiceMock: any;
	let routerMock: any;
  let storeMock: any;
  
  beforeEach(() => {
		homeServiceMock = {
      getList: jest.fn()
		};
		clothServiceMock = {
      createCloth: jest.fn(),
			editCloth: jest.fn(),
			deleteCloth: jest.fn(),
			getCloth: jest.fn(),
		};
		routerMock = jest.fn();
		component = new HomeComponent(
			homeServiceMock,
			routerMock,
			storeMock,
			clothServiceMock,
		);
		component.ngOnInit();
  });
  
  describe('Test: ngOnInit', () => {
		it('should call this.getClothesList()', () => {
      
			expect(component.loginForm.value).toEqual(loginForm);
		});
  });
  
});