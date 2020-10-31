import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewPostModel } from 'src/app/shared/models/new-post.model';
import { SignIn } from 'src/app/shared/models/sign-in.models';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  formg: FormGroup
  date: Date = new Date()
  constructor(private fb: FormBuilder,  private storage:StorageService) { this.createForm() }

  ngOnInit(): void {
  }


  createForm() {
    this.formg = this.fb.group({

      title: ['', [Validators.required]],
      date: [`${this.date}`, [Validators.required]],
      tags: this.fb.array(['']),
      subtitle: ['', [Validators.required]],
      urlImage: ['', [Validators.required]],
      textImage: ['', [Validators.required]],
      description: ['', [Validators.required]],

    });
  }
  get getTags(): FormArray { return this.formg.get('tags') as FormArray; }
  addTags(e) {


    if (e.key.toLowerCase() === 'enter' && this.getTags.controls.length < 5 && this.getTags.status === 'VALID') {
      this.getTags.push(this.fb.control('', [Validators.required]))
    }

  }

  removeTags(i: number) {

    if (this.getTags.controls.length > 1) {
      this.getTags.removeAt(i)
    }

  }



  saveForm() {

    if (this.formg.status === 'VALID') {
      let publication: NewPostModel = new NewPostModel();

      let user:SignIn = this.storage.getUser();
      publication.title = this.formg.get('title').value;
      publication.date = this.formg.get('date').value;
      publication.tags = this.formg.get('tags').value;
      publication.subtitle = this.formg.get('subtitle').value;
      publication.urlImage = this.formg.get('urlImage').value;
      publication.textImage = this.formg.get('textImage').value;
      publication.description = this.formg.get('description').value;
      publication.author = `${user.name}, ${user.lastname}, ${user.job}, ${user.age}, `;
      publication.authorImage = user.urlImage;

    } else {
      alert('Rellene todos los campos por favor');
    }

  }


}
