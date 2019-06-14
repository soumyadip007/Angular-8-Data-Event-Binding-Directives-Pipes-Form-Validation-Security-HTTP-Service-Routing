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
import { HttpModule} from '@angular/http';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';

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
   GithubFollowersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ CoursesService,PostService,GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
