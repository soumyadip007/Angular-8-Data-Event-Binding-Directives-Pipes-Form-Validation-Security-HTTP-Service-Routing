import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { custom } from './custom.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from "./contact-form/ContactFormComponent";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    custom,
    FavoriteComponent,
   FavoriteComponent,
   InputFormatDirective,
   ContactFormComponent, 

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
