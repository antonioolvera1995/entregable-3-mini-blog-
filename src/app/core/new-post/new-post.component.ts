import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  formg: FormGroup
  date: Date = new Date()
  constructor(private fb: FormBuilder) { this.createForm() }

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

  removeTags(i: number ) {

    if (this.getTags.controls.length > 1) {
      this.getTags.removeAt(i)
    }

  }



  saveForm() {
    console.log(this.formg.controls);

  }


}
