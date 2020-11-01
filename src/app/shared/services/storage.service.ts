import { Injectable } from '@angular/core';
import { NewPostModel } from '../models/new-post.model';
import { SignIn } from '../models/sign-in.models';
import { Login } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getUsers(): SignIn[] {
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

  getUser(): SignIn {
    let usersStorage: SignIn[] = [];
    let userStorage: SignIn = new SignIn();
    if (JSON.parse(localStorage.getItem('users'))) {
      usersStorage = JSON.parse(localStorage.getItem('users'));
      let login: Login = JSON.parse(localStorage.getItem('login'));
      for (const item of usersStorage) {
        if (item.email === login.email) {
          userStorage = item;
        }
      }

    }

    return userStorage;
  }


  savePost(post: NewPostModel) {

    let totalPost: string;
    let postStorage: NewPostModel[] = [];
    if (JSON.parse(localStorage.getItem('posts'))) {
      postStorage = JSON.parse(localStorage.getItem('posts'));
    }
    postStorage.push(post);
    totalPost = JSON.stringify(postStorage);
    localStorage.setItem('posts', totalPost);

  }
  searchId(): number {

    let id: number = 0;
    let postStorage: NewPostModel[] = [];
    if (JSON.parse(localStorage.getItem('posts'))) {
      postStorage = JSON.parse(localStorage.getItem('posts'));


      let block = true;
      while (block) {
        block = false;
        for (const item of postStorage) {
          if (item.id >= id) {
            id++;
            block = true;
          }

        }

      }


    }
    return id;
  }


}
