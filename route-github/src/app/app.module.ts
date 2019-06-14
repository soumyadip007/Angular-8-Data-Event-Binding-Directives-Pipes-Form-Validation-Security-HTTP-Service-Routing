import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GithubFollowersComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
