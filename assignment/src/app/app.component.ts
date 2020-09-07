import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeUserLoggedinState } from './state/user.actions';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated: Observable<boolean>
  constructor(public auth: AuthService, private store: Store<{ user: boolean }>) {
    this.isAuthenticated = store.pipe(select('user'));
  }
  ngOnInit() {
    window.localStorage.setItem('loginSuccess', JSON.stringify(true));
    this.store.dispatch(changeUserLoggedinState());
  }

  onLogout() {
    window.localStorage.setItem('loginSuccess', JSON.stringify(null));
    this.store.dispatch(changeUserLoggedinState());
  }
  title = 'Assignment';
}
