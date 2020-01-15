import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { Movie_list } from '../movielist';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
  //@Input() Lasting : number;
  //@Input() Ondate : Date;
  Movies : Movie[];

  constructor() { }

  ngOnInit() {
    this.Movies = Movie_list;
  }

}
