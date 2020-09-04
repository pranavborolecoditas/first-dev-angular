import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
        public auth: AuthService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
      const isAuthenticated = this.auth.isAuthenticated();
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      } else {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
      }
    }

    onSubmit() {
      if (this.loginForm.value.username === 'admin' || this.loginForm.value.password === 'admin') {
        window.localStorage.setItem('loginSuccess', JSON.stringify(true));
        this.router.navigate(['/home']);
      }
    }

}
