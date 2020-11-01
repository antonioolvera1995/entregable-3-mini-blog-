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
  loged: boolean = false;

  user: SignIn = new SignIn();

  constructor(private fb: FormBuilder, private login: LoginService, private storage: StorageService, private router: Router) {
    if (this.login.isLogin()) {
      this.loged = true;
      this.editForm();
    } else {
      this.createForm();
    }

  }

  ngOnInit(): void {
  }

  createForm() {

    this.formg = this.fb.group({

      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")], this.login.isRegisteredPromise],
      password: ['', [Validators.required, Validators.pattern("(?=\\w*[0-9])(?=\\w*[A-Z])(?=\\w*[a-z])\\S{4,16}$")]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.pattern("[0-9]{1,3}")]],
      job: ['', [Validators.required, Validators.minLength(3)]],
      urlImage: ['', [Validators.required, Validators.pattern("^http(s)?://.+$")]]

    });

  }

  editForm() {
    this.user = this.storage.getUser();

    this.formg = this.fb.group({

      email: [this.user.email, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
      password: [this.user.password, [Validators.required, Validators.pattern("(?=\\w*[0-9])(?=\\w*[A-Z])(?=\\w*[a-z])\\S{4,16}$")]],
      name: [this.user.name, [Validators.required, Validators.minLength(3)]],
      lastname: [this.user.lastname, [Validators.required, Validators.minLength(3)]],
      age: [this.user.age, [Validators.required, Validators.pattern("[0-9]{1,3}")]],
      job: [this.user.job, [Validators.required, Validators.minLength(3)]],
      urlImage: [this.user.urlImage, [Validators.required, Validators.pattern("^http(s)?://.+$")]]

    });

  }

  saveEditForm() {
    const valid = this.formg.status;
    

    if (valid === 'VALID') {
      let signIn = new SignIn();
      signIn.email = this.user.email;
      signIn.password = this.formg.get('password').value;
      signIn.name = this.formg.get('name').value;
      signIn.lastname = this.formg.get('lastname').value;
      signIn.age = this.formg.get('age').value;
      signIn.job = this.formg.get('job').value;
      signIn.urlImage = this.formg.get('urlImage').value;

      
        this.storage.saveEditUser(signIn);
        this.login.login(signIn.email);
        this.router.navigate(['/']);

    

    } else {

      alert('Debe de corregir los campos que esten mal')
    }



  }

  saveForm() {
    if (this.loged) {
      this.saveEditForm();
    } else {
      const valid = this.formg.status;
      

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
          this.login.login(signIn.email);
          this.router.navigate(['/']);

        } else {
          alert('Este email ya está registrado')
        }

      } else {

        alert('Debe de corregir los campos que esten mal')
      }
    }

  }


  get vaEmail() { return this.formg.get('email').status === 'VALID' && this.formg.get('email').touched }
  get invaEmail() { return this.formg.get('email').status === 'INVALID' && this.formg.get('email').touched }

  get vaPassword() { return this.formg.get('password').status === 'VALID' && this.formg.get('password').touched }
  get invaPassword() { return this.formg.get('password').status === 'INVALID' && this.formg.get('password').touched }

  get vaName() { return this.formg.get('name').status === 'VALID' && this.formg.get('name').touched }
  get invaName() { return this.formg.get('name').status === 'INVALID' && this.formg.get('name').touched }

  get vaLastname() { return this.formg.get('lastname').status === 'VALID' && this.formg.get('lastname').touched }
  get invaLastname() { return this.formg.get('lastname').status === 'INVALID' && this.formg.get('lastname').touched }

  get vaAge() { return this.formg.get('age').status === 'VALID' && this.formg.get('age').touched }
  get invaAge() { return this.formg.get('age').status === 'INVALID' && this.formg.get('age').touched }

  get vaJob() { return this.formg.get('job').status === 'VALID' && this.formg.get('job').touched }
  get invaJob() { return this.formg.get('job').status === 'INVALID' && this.formg.get('job').touched }

  get vaUrlImage() { return this.formg.get('urlImage').status === 'VALID' && this.formg.get('urlImage').touched }
  get invaUrlImage() { return this.formg.get('urlImage').status === 'INVALID' && this.formg.get('urlImage').touched }

}
 