import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private route:Router, private login:LoginService){}
  canActivate(): boolean {

    let registered = true;

    if (this.login.isLogin()) {
      registered = true;
    } else {
      registered = false;
    }

    if (!registered) {
      this.route.navigate(['login']);
    }
    return registered;
  }
  
}
