import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewPostModel } from 'src/app/shared/models/new-post.model';
import { SignIn } from 'src/app/shared/models/sign-in.models';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  formg: FormGroup;
  date: Date = new Date();
  constructor(private fb: FormBuilder, private storage: StorageService, private route: Router) { this.createForm() }

  ngOnInit(): void {
  }


  createForm() {
    this.formg = this.fb.group({

      title: ['', [Validators.required, Validators.minLength(10)]],
      date: [`${this.date}`, [Validators.required]],
      tags: this.fb.array([['', [Validators.required]]]),
      subtitle: ['', [Validators.required, Validators.minLength(10)]],
      urlImage: ['', [Validators.required, Validators.pattern("^http(s)?://.+$")]],
      textImage: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(500)]],

    });
  }
  get getTags(): FormArray { return this.formg.get('tags') as FormArray; }
  addTags(e) {


    if (e.key.toLowerCase() === 'enter' && this.getTags.controls.length < 5 && this.getTags.status === 'VALID') {
      this.getTags.push(this.fb.control('', [Validators.required]));
      let targett = (e.target as HTMLInputElement);
      targett.blur();
      for (let i = 0; i < this.getTags.controls.length; i++) {
        let item = this.getTags.controls[i];
        if (i > this.getTags.controls.length - 2) {
          item.enable();
        } else {
          item.disable();
        }
      }


      setTimeout(() => {
        var dom = document.getElementsByTagName("*");
        for (let i = 0; i < dom.length; i++) {
          const element: HTMLInputElement = dom[i] as HTMLInputElement;
          let atri0 = targett.getAttribute('ng-reflect-name');
          let atri = element.getAttribute('ng-reflect-name');
          

          if (Number(atri) > Number(atri0)) {
            element.focus();
          
          }
        }
      }, 100);



    }

  }

  removeTags(i: number) {
    if (this.getTags.controls.length > 1) {
      this.getTags.removeAt(i)
    }
    for (let i = 0; i < this.getTags.controls.length; i++) {
      let item = this.getTags.controls[i];
      if (i > this.getTags.controls.length - 2) {
        item.enable();
      } else {
        item.disable();
      }
    }
  }



  saveForm() {
    if (this.formg.status === 'VALID') {
      let publication: NewPostModel = new NewPostModel();

      let user: SignIn = this.storage.getUser();
      publication.title = this.formg.get('title').value;
      publication.date = `${this.date}`;
      publication.tags = this.formg.get('tags').value;
      publication.subtitle = this.formg.get('subtitle').value;
      publication.urlImage = this.formg.get('urlImage').value;
      publication.textImage = this.formg.get('textImage').value;
      publication.description = this.formg.get('description').value;
      publication.author = `${user.name}, ${user.lastname}, ${user.job}, ${user.age}`;
      publication.authorImage = user.urlImage;
      publication.id = this.storage.searchId();

      this.storage.savePost(publication);
      this.route.navigate([`/publication-details/${publication.id}`]);

    }

  }

get vaTitle(){ return this.formg.get('title').status === 'VALID' && this.formg.get('title').touched}
get invaTitle(){ return this.formg.get('title').status === 'INVALID' && this.formg.get('title').touched}

get vaTag(){ return this.formg.get('tags').status === 'VALID' && this.formg.get('tags').touched}
get invaTag(){ return this.formg.get('tags').status === 'INVALID' && this.formg.get('tags').touched}

get vaSubtitle(){ return this.formg.get('subtitle').status === 'VALID' && this.formg.get('subtitle').touched}
get invaSubtitle(){ return this.formg.get('subtitle').status === 'INVALID' && this.formg.get('subtitle').touched}

get vaUrlImage(){ return this.formg.get('urlImage').status === 'VALID' && this.formg.get('urlImage').touched}
get invaUrlImage(){ return this.formg.get('urlImage').status === 'INVALID' && this.formg.get('urlImage').touched}

get vaTextImage(){ return this.formg.get('textImage').status === 'VALID' && this.formg.get('textImage').touched}
get invaTextImage(){ return this.formg.get('textImage').status === 'INVALID' && this.formg.get('textImage').touched}

get vaDescription (){ return this.formg.get('description').status === 'VALID' && this.formg.get('description').touched}
get invaDescription (){ return this.formg.get('description').status === 'INVALID' && this.formg.get('description').touched}
}
