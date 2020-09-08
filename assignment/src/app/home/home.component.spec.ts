import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let homeServiceMock;
  let storeMock,
    routerMock,
    clothServiceMock;

  beforeEach(async () => {
    component = new HomeComponent(
      homeServiceMock,
      storeMock,
      routerMock,
      clothServiceMock,
    );
  });

  describe( 'Setup component', () => {
		describe( 'ngOnInit', () => {
			it( 'should call getClothesList', () => {
				const getClothesListSpy = jest.spyOn( component, 'getClothesList' );
				
				component.ngOnInit();
				
				expect( getClothesListSpy ).toBeCalledWith( component );
			});
		});
	});

});
