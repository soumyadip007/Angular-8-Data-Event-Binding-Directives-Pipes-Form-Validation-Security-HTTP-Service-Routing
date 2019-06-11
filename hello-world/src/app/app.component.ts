
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewMode="map";

  course=[
    {id:1, name: 'C'},
    {id:2, name: 'Java'},
    {id:3, name: 'CPP'}
  ];

  post={
  title : 'Angular App',
  isFavorite: true
}
}
