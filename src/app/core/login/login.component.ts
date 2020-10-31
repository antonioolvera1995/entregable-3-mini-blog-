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

  login: LoginModel;
  formg: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router) { this.createForm(); }

  ngOnInit(): void {
  }

  createForm() {

    this.formg = this.fb.group({

      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")], this.loginService.isRegisteredPromiseLogin],
      password: ['', Validators.required]

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

        alert('Contraseña incorrecto')
      }

    } else {
      alert('Usuario incorrecto')
    }


  }

}
