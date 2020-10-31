import { Injectable } from '@angular/core';
import { SignIn } from '../models/sign-in.models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


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


}
