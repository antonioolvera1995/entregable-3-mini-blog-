import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewPostModel } from 'src/app/shared/models/new-post.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {


  posts: NewPostModel[];
  show: boolean = false;

  constructor(private storage: StorageService, private route: Router) {
    this.storage.fillData();
    this.loadPosts();
  }

  ngOnInit(): void {
  }

  loadPosts() {

    if (this.storage.getPosts() != null) {
      this.posts = this.storage.getPosts();

      for (const post of this.posts) {

        let descrip: string[] = post.description.split(' ');
        let newDescription = '';
        for (let i = 0; i < descrip.length; i++) {
          const item = descrip[i];
          if (i < 20) {
            newDescription += `${item} `;
          }
        }
        newDescription = newDescription.substring(0, newDescription.length - 2);
        post.description = `${newDescription}...`;
      }


      this.show = true;
    }
  }


  goDetails(id: number) {

    this.route.navigate([`/publication-details/${id}`]);

  }

}
