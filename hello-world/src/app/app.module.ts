import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { custom } from './custom.pipe';
//import { FavouriteComponent } from './favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    custom,
  //  FavouriteComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
