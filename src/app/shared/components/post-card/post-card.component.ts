import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() urlImage:string = '';
  @Input() title:string = '';
  @Input() description:string = '';
  @Input() date:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
