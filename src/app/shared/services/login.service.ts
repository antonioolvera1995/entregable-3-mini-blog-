import { Injectable } from '@angular/core';
import { SignIn } from '../models/sign-in.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  isLogin() {

    const login = localStorage.getItem('login');
    if (login === 'true') {
      return true;
    } else {
      return false;
    }

  }


//eliminar logs al comprobar efectividad

  isRegistered(email: string): boolean {
    let users: SignIn[] = [];
    if (localStorage.getItem('users').length > 0) {
      users = JSON.parse(localStorage.getItem('users'));
    } else {
      console.log('el usuario no existe');
      return false;
    }

    for (const item of users) {
      if (item.email === email) {
        console.log('el usuario ya existe');
        return true;
      }
    }
    console.log('el usuario no existe');
    return false;

  }

}
