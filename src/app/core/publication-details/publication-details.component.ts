import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewPostModel } from 'src/app/shared/models/new-post.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {

  post: NewPostModel = new NewPostModel();

  constructor(private storage: StorageService, private ruta: ActivatedRoute) {
    this.loadPost();
  }

  ngOnInit(): void {

  }


  loadPost() {
    this.ruta.params.subscribe((params) => {
      this.post = this.storage.getPost(Number(params['id']));
    });
  }

}
