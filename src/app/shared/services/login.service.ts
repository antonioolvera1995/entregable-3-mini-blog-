import { Injectable } from '@angular/core';
import { SignIn } from '../models/sign-in.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  login() {
      const login = localStorage.setItem('login', 'true');
  }

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
<<<<<<< HEAD
    let users: SignIn[] = [];
    if (localStorage.getItem('users').length > 0) {
      users = JSON.parse(localStorage.getItem('users'));
    } else {
      console.log('el usuario no existe');
      return false;
    } 
=======
    let loged: boolean;
    try {
      let users: SignIn[] = [];
      if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
>>>>>>> sign-in

      } else {

        loged = false;
      }

      if (localStorage.getItem('users')) {
        for (const item of users) {
          if (item.email.toLowerCase() === email.toLowerCase()) {

            loged = true;
          }
        }
      }else{loged = false}
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
          }else{loged = false}
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


