import { TestBed } from '@angular/core/testing';

import { ClothesFormService } from './clothes-form.service';

describe('ClothesFormService', () => {
  let service: ClothesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
