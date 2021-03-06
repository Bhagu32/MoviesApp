import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//FOR NGX-BOOTSTRAP 
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
// import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

///create constant for router
//only single page but it redirect to different after clicking tab
const appRouts:Routes=[]

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(appRouts),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
