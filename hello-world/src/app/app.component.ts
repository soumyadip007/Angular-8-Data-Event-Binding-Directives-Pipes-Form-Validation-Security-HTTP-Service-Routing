
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewMode="map";

  course=[1,2,3,4];

  post={
  title : 'Angular App',
  isFavorite: true
}
}
