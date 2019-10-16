import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


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
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


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
  NavbarComponent,
  GithubFollowersComponent,
  GithubProfileComponent,
  HomeComponent,
   NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
         path:'', 
         component : HomeComponent},
         {
          path:'signup',
          component : SignupFormComponent},
          {
            path:'contact',
            component : ContactFormComponent},
            {
              path:'course',
              component : CourseComponent},
      {
         path:'followers',
         component : GithubFollowersComponent},
      { 
        path:'followers/:id/:username',
         component : GithubProfileComponent},
     { 
        path:'posts',

        component : PostsComponent},
        { 
          path:'**',
          component : NotFoundComponent}  
    ])
  ],
  providers: [ CoursesService,PostService,GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
