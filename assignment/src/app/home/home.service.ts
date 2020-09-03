import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { ApiEndpoints } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpService: HttpService) { }

  getList() {
    return this.httpService.get(ApiEndpoints.CLOTHES.LIST);
  }
}
