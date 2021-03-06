import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home.component.routing.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
   
    FormsModule,
    ReactiveFormsModule,
   
    
  ]
})
export class HomeModule { }
