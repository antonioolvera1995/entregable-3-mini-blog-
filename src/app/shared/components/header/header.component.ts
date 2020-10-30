import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public login: boolean = false;
  detalles:boolean = false;
  

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    clearInterval(this.start);
  }

  start = setInterval(() => {

    if (window.location.pathname.search('publication-details')>-1) {
      this.detalles = true;
    } else {
      this.detalles = false;
    }

    if (this.loginService.isLogin()) {
      this.login = true;
    } else {
      this.login = false;
    }
  }, 2000);










}
