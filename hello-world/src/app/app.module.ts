import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { custom } from './custom.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    custom,
    FavoriteComponent,
   FavoriteComponent,
   InputFormatDirective,
   ContactFormComponent,
   SignupFormComponent,
   PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
