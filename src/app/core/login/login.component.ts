import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/shared/models/login.models';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  incorrect:boolean = false;
  login: LoginModel;
  formg: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router) { this.createForm(); }

  ngOnInit(): void {
  }

  createForm() {

    this.formg = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")], this.loginService.isRegisteredPromiseLogin],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

  }


  saveform() {
    if (this.formg.status === 'VALID') {
      let user: LoginModel = {
        email: this.formg.get('email').value,
        password: this.formg.get('password').value
      }
      if (this.loginService.enter(user)) {
        this.loginService.login(user.email);
        this.route.navigate(['/']);
      } else {
        this.incorrect = true;
        setTimeout(() => {
          this.incorrect = false;
        }, 5000);
      }

    } else {
      this.incorrect = true;
      setTimeout(() => {
        this.incorrect = false;
      }, 5000);
    }
  }



  get vaEmail():boolean{ return this.formg.get('email').status === 'VALID' && this.formg.get('email').touched}
  get invaEmail():boolean{ return this.formg.get('email').status === 'INVALID' && this.formg.get('email').touched}

  get vaPassword():boolean{ return this.formg.get('password').status === 'VALID' && this.formg.get('password').touched}
  get invaPassword():boolean{ return this.formg.get('password').status === 'INVALID' && this.formg.get('password').touched}
  

}
