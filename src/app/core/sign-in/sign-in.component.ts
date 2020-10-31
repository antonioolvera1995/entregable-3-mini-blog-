import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignIn } from 'src/app/shared/models/sign-in.models';
import { LoginService } from 'src/app/shared/services/login.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formg: FormGroup;

  constructor(private fb: FormBuilder, private login: LoginService, private storage: StorageService, private router:Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {

    this.formg = this.fb.group({

      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")], this.login.isRegisteredPromise],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      age: ['', [Validators.required]],
      job: ['', [Validators.required]],
      urlImage: ['', [Validators.required]]

    });

  }


  saveForm() {
    const valid = this.formg.status;
    console.log(this.formg.get('email').status);

    if (valid === 'VALID') {
      let signIn = new SignIn();
      signIn.email = this.formg.get('email').value;
      signIn.password = this.formg.get('password').value;
      signIn.name = this.formg.get('name').value;
      signIn.lastname = this.formg.get('lastname').value;
      signIn.age = this.formg.get('age').value;
      signIn.job = this.formg.get('job').value;
      signIn.urlImage = this.formg.get('urlImage').value;

      if (!this.login.isRegistered(signIn.email)) {
        this.storage.saveNewUser(signIn);
        this.login.login();
        this.router.navigate(['/']);

      }else{
        alert('Este email ya está registrado')
      }
      
    } else {

      alert('Debe de corregir los campos que esten mal')
    }

  }


}
