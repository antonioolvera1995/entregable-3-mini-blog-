import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


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
  @Input() idInput:number = 0;

  @Output() idOutput = new EventEmitter<number>();
  constructor() { 

  }

  ngOnInit(): void {
  }


  getId(id:number){
    this.idOutput.emit(id);
  }

}
