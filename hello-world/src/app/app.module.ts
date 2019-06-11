import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { custom } from './custom.pipe';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    custom,
    FavoriteComponent,
   FavoriteComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
