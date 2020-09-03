import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public clothes: any;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getClothesList();
  }

  getClothesList() {
    this.homeService.getList().subscribe(res => {
      this.clothes = res;
    })
  }

}
