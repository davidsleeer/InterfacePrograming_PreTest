import { Component, OnInit } from '@angular/core';
import { Movie} from '../movie';
import { Movie_list } from '../movielist';

@Component({
  selector: 'app-movie-info-component',
  templateUrl: './movie-info-component.component.html',
  styleUrls: ['./movie-info-component.component.css']
})
export class MovieInfoComponentComponent implements OnInit {
  movies : Movie[];

  //Titles: string = 'this.movies[0].Title';
  //Ratings: number = 8.3;
  //Desc: string ="The thrilling second chapter of the epic How To Train Your Dragon trilogy brings back the fantastical world of Hiccup and Toothless five years later. While Astrid, Snotlout and the rest of the gang are challenging each other to dragon races (the island's new favorite contact sport), the now inseparable pair journey through the skies, charting unmapped territories and exploring new worlds. When one of their adventures leads to the discovery of a secret ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.";
  //Lastings : number = 102;
  //Ondates = new Date("2014-06-13");
  //MovieThumbnails = "https://www.dailydot.com/wp-content/uploads/916/40/6a82dd7cdf1ba46fb75f9c81e7fa735f.jpg";
  RatingsUp: number = 3;
  RatingsDown: number = 3;


  

  constructor() { }

  ngOnInit() {
    this.movies = Movie_list;
  }
  addRatingUp(value:number){
    this.RatingsUp += value;
    
  }
  addRatingDown(value: number) {
    this.RatingsDown += value;
    
  }


}
