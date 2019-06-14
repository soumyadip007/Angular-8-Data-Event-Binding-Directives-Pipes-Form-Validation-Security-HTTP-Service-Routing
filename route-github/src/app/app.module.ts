import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { DataService } from './services/data.service';
import { AppError } from './common/app-error';
import { BadInput } from './common/bad-input';
import { NotFoundError } from './common/not-found-error';
import { custom } from 'src/app/custom.pipe'
import { GithubFollowersService } from './services/github-followers.service';



@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent,
    custom,
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
