import { Component, OnInit } from '@angular/core';
import { SignIn } from '../../models/sign-in.models';
import {  LoginService } from '../../services/login.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoged:SignIn;
  public login: boolean = false;
  detalles:boolean = false;
  width:number = 0;

  mobile:boolean = false;
  menuActive:boolean = false;
  

  constructor(private loginService: LoginService, private storage:StorageService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    clearInterval(this.start);
  }

  start = setInterval(() => {

    //reponsive
    this.width = window.innerWidth
    if (this.width <= 992) {
      this.mobile = true;
    }else{
      this.mobile = false;
    }


    //reveal-text
    if (window.location.pathname.search('publication-details')>-1) {
      this.detalles = true;
    } else {
      this.detalles = false;
    }

    if (this.loginService.isLogin()) {
      this.login = true;
      this.userLoged = this.storage.getUser();
    } else {
      this.login = false;
    }
  }, 100);



logOut(){
  this.loginService.logOut();
}


menuAction(){

  
}



}
