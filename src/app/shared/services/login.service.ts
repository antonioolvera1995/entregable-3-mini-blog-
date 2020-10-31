import { Injectable } from '@angular/core';
import { SignIn } from '../models/sign-in.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  login(email: string) {
    let log: Login = { login: true, email: email.toLowerCase() };
    localStorage.setItem('login', JSON.stringify(log));
  }

  isLogin() {

    try {
      const log = localStorage.getItem('login');
      const login: Login = JSON.parse(log);
      if (login.login === true) {
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

    let loged: boolean;
    try {
      let users: SignIn[] = [];
      if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));


      } else {

        loged = false;
      }

      if (localStorage.getItem('users')) {
        for (const item of users) {
          if (item.email.toLowerCase() === email.toLowerCase()) {

            loged = true;
          }
        }
      } else { loged = false }
    } catch (error) {
      loged = false;
    }



    return loged;

  }





  isRegisteredPromise(control) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        let loged: boolean;
        try {
          let users: SignIn[] = [];
          if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));

          } else {

            loged = false;
          }

          if (localStorage.getItem('users')) {
            for (const item of users) {
              if (item.email.toLowerCase() === control.value.toLowerCase()) {

                loged = true;
              }
            }
          } else { loged = false }
        } catch (error) {
          loged = false;
        }



        if (!loged) {
          resolve(null);
          console.log('no existe');
        } else {
          resolve({ isRegisteredPromise: true });

          console.log('existe');

        }
      }, 1000);


    });

  }

}


export interface Login {
  login: boolean,
  email: string
}