import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../AppService/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieitemComponent implements OnInit {

  MoviesDetailsbyid: any;
  public url="https://image.tmdb.org/t/p/original";
  moviepath:any;
  constructor(private movieservice: MoviesService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.getMoviesdetailsbyid(id);
      });
 
  }
  getMoviesdetailsbyid(id:any)
{
  debugger

  var idDto = {
    id: id
  };
  this.movieservice.getMoviesdetailsbyid(idDto).subscribe(data => {
    this.MoviesDetailsbyid = data;
    console.log(this.MoviesDetailsbyid);
    this.moviepath=this.url+'/'+ this.MoviesDetailsbyid.backdrop_path;
    console.log(this.moviepath);
  });
}

}
