import { Injectable } from '@angular/core';
import {sprintf} from "sprintf-js";

import { HttpService } from '../shared/services/http.service';
import { ApiEndpoints } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ClothesFormService {

  constructor(private httpService: HttpService) { }

  createCloth(cloth) {
    return this.httpService.post(ApiEndpoints.CLOTHES.LIST, cloth);
  }

  editCloth(cloth, id) {
    return this.httpService.put(sprintf(ApiEndpoints.CLOTHES.EDIT, id), cloth);
  }

  deleteCloth(id) {
    return this.httpService.delete(sprintf(ApiEndpoints.CLOTHES.EDIT, id), {});
  }

  getCloth(id) {
    return this.httpService.get(sprintf(ApiEndpoints.CLOTHES.EDIT, id));
  }
}
