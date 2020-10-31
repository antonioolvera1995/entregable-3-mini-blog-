import { Injectable } from '@angular/core';
import { SignIn } from '../models/sign-in.models';
import { Login } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getUsers():SignIn[]{
    let usersStorage: SignIn[] = [];
    if (JSON.parse(localStorage.getItem('users'))) {
      usersStorage = JSON.parse(localStorage.getItem('users'));
    }
    return usersStorage;
  }

  saveNewUser(user: SignIn) {

    let totalUsers: string;
    let usersStorage: SignIn[] = [];
    if (JSON.parse(localStorage.getItem('users'))) {
      usersStorage = JSON.parse(localStorage.getItem('users'));
    }
    usersStorage.push(user);
    totalUsers = JSON.stringify(usersStorage)
    localStorage.setItem('users', totalUsers);
    
  }

  getUser():SignIn{
    let usersStorage: SignIn[] = [];
    let userStorage: SignIn = new SignIn();
    if (JSON.parse(localStorage.getItem('users'))) {
      usersStorage = JSON.parse(localStorage.getItem('users'));
      let login:Login =  JSON.parse(localStorage.getItem('login'));
      for (const item of usersStorage) {
        if (item.email === login.email) {
          userStorage = item;
        }
      }
     
    }

    return userStorage;
  }


}
