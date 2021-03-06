import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('loginSuccess'));
    if (token) {
      return token;
    } else {
      return false;
    }
  }

  public login(user): boolean {
    if (user.username === 'admin' || user.password === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  public logout(): void {
    window.localStorage.setItem('loginSuccess', JSON.stringify(null));
  }
}
