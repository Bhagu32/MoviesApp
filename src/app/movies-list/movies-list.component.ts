import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../AppService/movie.service';



@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {


  //public pageSizes = true;
  public url="https://image.tmdb.org/t/p/original";
public pageSize = 15;
public previousNext = true;
public buttonCount = 5;
public allowUnsort = true;
public MoviesList:any;
public  gridApproachData:any;
public  MoviesDetails:any;
  public gridMoviesDetailsData:any;
  public actionmovietitle:string="";
  public AdventureMoviesDetailsData:any;
  public AdventureTitle:string="";
  public AnimationMoviesDetailsData:any;
  public AnimationTitle:string="";
  public  movielistData:any;
  gernid:any;
  public MoviesDetailsbyid:any;
  public ComedyTitle:any;
  public ComedyMoviesDetailsData:any;
  CrimeTitle:any;
  CrimeMoviesDetailsData:any;
  DocumentaryTitle:any;
  DocumentaryMoviesDetailsData:any;
  DramaTitle:any;
  DramaMoviesDetailsData:any;
  constructor(private movieservice: MoviesService) {
  
    }
      ngOnInit() {
      this.getMoviesList();
      // this.getMoviesDetails()
  
    }

getMoviesList() {
  this.movieservice.getMoviesList().subscribe(data => {
    this.MoviesList = data;
    this.gridApproachData = data['genres'];
    for (let i = 0; i < this.gridApproachData.length; i++){
      this.gernid=this.gridApproachData[i]['id'];
      this.getMoviesDetails(this.gernid,this.gridApproachData[i]['name']);
    }
  });
 

}

getMoviesDetails(id:any,name:any) {
  var idDto = {
    id: id,
    name:name
  };

  this.movieservice.getMoviesDetails(idDto).subscribe(data => {
    this.MoviesDetails = data;
    
    if(idDto['name']=="Action")
    {
      this.actionmovietitle=idDto['name'];
      this.gridMoviesDetailsData = data['results'];
    }
    else if(idDto['name']=="Adventure")
    {
      this.AdventureTitle=idDto['name'];
      this.AdventureMoviesDetailsData = data['results'];
    }
    else if(idDto['name']=="Animation")
    {
      this. AnimationTitle=idDto['name'];
      this.AnimationMoviesDetailsData = data['results'];
    }
    else if(idDto['name']=="Comedy")
    {
      this. ComedyTitle=idDto['name'];
      this.ComedyMoviesDetailsData = data['results'];
    }
    else if(idDto['name']=="Crime")
    {
      this. CrimeTitle=idDto['name'];
      this.CrimeMoviesDetailsData = data['results'];
    }
    else if(idDto['name']=="Documentary")
    {
      this. DocumentaryTitle=idDto['name'];
      this.DocumentaryMoviesDetailsData = data['results'];
    }
    else if(idDto['name']=="Drama")
    {
      this. DramaTitle=idDto['name'];
      this.DramaMoviesDetailsData = data['results'];
    }
  });
  
  
}


}
