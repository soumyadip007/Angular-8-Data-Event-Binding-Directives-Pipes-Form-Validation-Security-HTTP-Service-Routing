import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { DataService } from './services/data.service';
import { AppError } from './common/app-error';
import { BadInput } from './common/bad-input';
import { NotFoundError } from './common/not-found-error';
import { custom } from 'src/app/custom.pipe'

@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent,
    GithubFollowersService,
    DataService,
    AppError,
    BadInput,
    NotFoundError,
    custom,
  ],
 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
