import { ClothesFormComponent } from './clothes-form.component';
import { ActivatedRoute } from '@angular/router';

describe('ClothesFormComponent', () => {
  let component: ClothesFormComponent;
  let route: ActivatedRoute;
  let clothesFormMock;
  let ActivatedRouteMock,
    FormBuilderMock,
    RouterMock;

  beforeEach(async () => {
    component = new ClothesFormComponent(
      clothesFormMock,
      ActivatedRouteMock,
      FormBuilderMock,
      RouterMock,
    );
    route = new ActivatedRoute();
  });

  describe( 'Setup component', () => {
		describe( 'ngOnInit', () => {
      it('should call this.route with Activated route', () => {

      })
			it( 'should call getCloth with this.clothId', () => {
				const getClothFormSpy = jest.spyOn( component, 'getCloth' );
				
				component.ngOnInit();
				
				expect( getClothFormSpy ).toBeCalledWith( component );
			});
		});
	});

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
