import { HomeComponent } from "./home.component";
import { Store } from '@ngrx/store';
import { of, observable } from 'rxjs';
import { HomeService } from './home.service';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let homeServiceMock: any;
	let clothServiceMock: any;
	let routerMock: any;
	let storeMock: any;

	beforeEach(async () => {
		const response = [{
			id: 0,
			product: "Fake product",
			productDescription: "New product",
			productMaterial: "Soft",
		}];
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
		storeMock = {
			pipe: jest.fn()
		};
		component = new HomeComponent(
			homeServiceMock,
			storeMock,
			routerMock,
			clothServiceMock,
		);
	});

	describe('Test: ngOnInit', () => {
		it('should call this.getClothesList()', () => {
			expect(component.getClothesList()).toBeCalledTimes(1);
		});
	});

	describe('Test: getClothList', () => {
		it('Should return cloth list', () => { 
			const response = [{
				id: 0,
				product: "Fake product",
				productDescription: "New product",
				productMaterial: "Soft",
			}];
			const httpMock = {
				get: jest.fn().mockReturnValue(of(response))
			};
			const serviceMock = new HomeService(httpMock as any);
			serviceMock.getList().subscribe((data) => {
				expect(httpMock.get).toBeDefined();
				expect(httpMock.get).toHaveBeenCalled();
				expect(data).toEqual(response);
			});

		})
	})
});