import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.models';
import { SignIn } from '../models/sign-in.models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage: StorageService) { }


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

        } else {
          resolve({ isRegisteredPromise: true });



        }
      }, 1000);


    });

  }



  isRegisteredPromiseLogin(control) {
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




        if (loged) {
          resolve(null);

        } else {
          resolve({ isRegisteredPromise: true });



        }
      }, 1000);


    });

  }






  enter(user: LoginModel): boolean {

    const users: SignIn[] = this.storage.getUsers();

    for (const item of users) {
      if (item.email.toLowerCase() === user.email.toLowerCase() && item.password === user.password) {
        return true;
      }
    }


    return false;
  }










}





export interface Login {
  login: boolean,
  email: string
}