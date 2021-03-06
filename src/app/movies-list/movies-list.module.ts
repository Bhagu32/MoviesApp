// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// // import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';

// //import { GridModule } from '@progress/kendo-angular-grid';

// import { MoviesListComponent } from './movies-list.component';
// import { MoviesService } from '../AppService/northwind.service';
// import { MoviesListRoutingModule } from './movies-list.routing.module';


// @NgModule({
//   declarations: [MoviesListComponent],
//   imports: [
//     CommonModule, BrowserAnimationsModule,  HttpClientModule, MoviesListRoutingModule
//   ],
//   providers: [MoviesService ],
//   bootstrap: []
// })
// export class MoviesListModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieitemModule } from '../movie-item/movie-item.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesListRoutingModule } from './movies-list.routing.module';
import { MoviesListComponent } from './movies-list.component';
import { HomeModule } from '../home/home.module';




@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    CommonModule,
    MoviesListRoutingModule,
   
    FormsModule,
    ReactiveFormsModule,
    MovieitemModule,
    HomeModule
    
  ]
})
export class MoviesListModule { }
