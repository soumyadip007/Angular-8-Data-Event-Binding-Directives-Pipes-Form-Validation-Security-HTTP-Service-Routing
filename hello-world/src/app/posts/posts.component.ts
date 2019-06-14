
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {

  constructor(http : Http) {

    http.get('https://jsonplaceholder.typicode.com/posts' )
    .subscribe( response => {
      console.log(response.json());
    });

  }
}
