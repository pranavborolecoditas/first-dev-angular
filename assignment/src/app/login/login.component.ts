import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { changeUserLoggedinState } from '../state/user.actions';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        public auth: AuthService,
        private store: Store<{ isLogin: boolean }>
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
      const isAuthenticated = this.auth.isAuthenticated();
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      }
    }

    onSubmit() {
      if (this.loginForm.dirty && this.loginForm.valid) {
        if (this.auth.login(this.loginForm.value)) {
          window.localStorage.setItem('loginSuccess', JSON.stringify(true));
          this.store.dispatch(changeUserLoggedinState());
          this.router.navigate(['/home']);
        } 
      }
    }

}
