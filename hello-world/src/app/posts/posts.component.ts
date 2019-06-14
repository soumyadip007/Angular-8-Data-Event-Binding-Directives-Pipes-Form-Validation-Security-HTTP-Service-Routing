
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {

  posts:any[];
  private url ='https://jsonplaceholder.typicode.com/posts';

  constructor(private http : Http) {

    http.get('https://jsonplaceholder.typicode.com/posts' )
    .subscribe( response => {
      this.posts=response.json();
      console.log(response.json());
    });
  }

  createPost(input : HTMLInputElement)
  {
    let post={ title: input.value};
    input.value='';

    this.http.post(this.url, JSON.stringify(post))
    .subscribe( response => {
      post['id']= response.json().id;
      this.posts.splice(0,0,post);
      console.log(response.json());
    });
  }

}
