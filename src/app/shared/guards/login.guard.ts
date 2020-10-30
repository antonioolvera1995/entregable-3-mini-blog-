import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(): boolean {

    let registered = false;
    if (!registered) {
      registered = false;
      this.route.navigate(['login']);
    }else{
      registered = true;

    }
    

    return registered;
  }
  
}
