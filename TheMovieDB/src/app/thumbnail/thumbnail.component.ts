import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { Movie_list } from '../movielist';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
 // @Input() MovieThumbnai : string;
  Movies: Movie[];

  constructor() { }

  ngOnInit() {
    this.Movies = Movie_list;
  }

}
