import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list.component';


const routes: Routes = [{
  path: '',
  component: MoviesListComponent,
  data: {
    title: 'Movies List'
  }
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesListRoutingModule { }
