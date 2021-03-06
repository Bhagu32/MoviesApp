import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class MoviesService {
  constructor(private http: HttpClient) { }
  getMoviesList() {
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41`);
  }

  getMoviesDetails(idDto: any) {
    return this.http.get(`https://api.themoviedb.org/3/genre/${idDto.id}/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41`);
  }
  getMoviesdetailsbyid(movieid:any)
  {    return this.http.get(`https://api.themoviedb.org/3/movie/${movieid.id}?api_key=68e82445c8842ba8616d0f6bf0e97a41`);

  }

}
