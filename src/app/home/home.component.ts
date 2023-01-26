import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies: any
  constructor(private http: HttpClient){}

  ngOninit(): void {
    this.getTrendingMovies();
  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe(movies) => {
    this.TrendingMovies = movies;
    console.log(this.TrendingMovies)
    });
  }
}
