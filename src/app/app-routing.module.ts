import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path:"",
    loadChildren: () => import('./movies-list/movies-list.module').then(m => m.MoviesListModule)
  } , 
  {
    path:"movies/:id",
    loadChildren: () => import('./movie-item/movie-item.module').then(m => m.MovieitemModule)
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
