import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changetheme } from './state/theme.actions';
import { changeUserLoggedinState } from './state/user.actions';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated: Observable<boolean>;
  theme$: Observable<string>;
  constructor(public auth: AuthService, private userStore: Store<{ user: boolean }>, private store: Store<{ theme: string }>) {
    this.isAuthenticated = userStore.pipe(select('user'));
    this.theme$ = store.pipe(select('theme'));
  }
  ngOnInit() {
    this.userStore.dispatch(changeUserLoggedinState());
  }

  onLogout() {
    this.auth.logout();
    this.userStore.dispatch(changeUserLoggedinState());
  }

  onThemeChange(){
    this.store.dispatch(changetheme());
   }
  title = 'Assignment';
}
