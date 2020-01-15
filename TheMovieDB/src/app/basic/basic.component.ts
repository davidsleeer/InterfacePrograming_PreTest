import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { Movie_list } from '../movielist';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  //@Input() Title: string;
  //@Input() Des : string;
  //@Input() Rating : number;
  //@Input() Lasting : number;
  //@Input() Ondate : Date;
  @Input() RatingUp: number;
  @Input() RatingDown: number;
  
  Movies : Movie[];
  @Output() RatingUpEvent = new EventEmitter<any>();
  @Output() RatingDownEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.Movies = Movie_list;
  }
  
  ratingMovieUp(value : number){
    this.RatingUpEvent.emit(value);
  }

  ratingMovieDown(value: number) {
    this.RatingDownEvent.emit(value);
  }
}
