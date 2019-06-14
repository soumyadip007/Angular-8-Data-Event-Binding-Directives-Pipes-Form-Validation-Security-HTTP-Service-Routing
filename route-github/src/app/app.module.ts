import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';



@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent,
  ],
 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
