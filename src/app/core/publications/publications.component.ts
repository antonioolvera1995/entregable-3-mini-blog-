import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  array = [6,6,4,4,5,34,1,1,4]
  constructor() { }

  ngOnInit(): void {
  }

}
