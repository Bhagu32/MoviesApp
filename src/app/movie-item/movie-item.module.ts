import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieitemComponent } from './movie-item.component';
import { MovieitemRoutingModule } from './movie-item.routing.module';



@NgModule({
  declarations: [MovieitemComponent],
  imports: [
    CommonModule,
    MovieitemRoutingModule
  ]
})
export class MovieitemModule { }
