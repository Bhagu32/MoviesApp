import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieitemComponent } from './movie-item.component';


const routes: Routes = [{
  path: '',
  component: MovieitemComponent,
  data: {
    title: 'Movie-item'
  }
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieitemRoutingModule { }
