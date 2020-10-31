import { Injectable } from '@angular/core';
import { SignIn } from '../models/sign-in.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  isLogin() {

    try {
      const login = localStorage.getItem('login');
      if (login === 'true') {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }


  }


  //eliminar logs al comprobar efectividad

  isRegistered(email: string): boolean {

    try {
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
    } catch (error) {

      console.log('el usuario no existe');
      return false;
    }
    return false;

  }





  isRegisteredPromise(control) {
    return new Promise((resolve, reject) => {



      setTimeout(() => {
        let loged: boolean;
        try {
          let users: SignIn[] = [];
          if (localStorage.getItem('users').length > 0) {
            users = JSON.parse(localStorage.getItem('users'));
          } else {
  
            loged = false;
          }
  
          for (const item of users) {
            if (item.email.toLowerCase() === control.value.toLowerCase()) {
  
              loged = true;
            }
          }
        } catch (error) {
          loged = false;
        }
  
        if (loged) {
          resolve(true);
          console.log('existe');
        } else {
          resolve({ isRegisteredPromise: true });
  
          console.log('no existe');
  
        }
      }, 1000);


    });

  }

}


