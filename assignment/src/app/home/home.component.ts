import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { ClothesFormService } from '../clothes-form/clothes-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public clothes: any;
  isAuthenticated: Observable<boolean>
  constructor(
    private homeService: HomeService,
    private store: Store<{ user: boolean }>,
    private router: Router,
    private clothService: ClothesFormService,
  ) {
    this.isAuthenticated = store.pipe(select('user'));
  }

  ngOnInit(): void {
    this.getClothesList();
  }

  getClothesList() {
    this.homeService.getList().subscribe(res => {
      this.clothes = res;
    })
  }

  onCreate() {
    this.router.navigate(['create-product'])
  }

  onEdit(id) {
    this.router.navigate(['edit-product', id])
  }

  onDelete(id) {
    const confirmAlert = confirm("Are you sure, you want to delete Product?");
    if (confirmAlert == true) {
      this.clothService.deleteCloth(id).subscribe(res => {
        this.getClothesList();
      })
    }
  }
}
