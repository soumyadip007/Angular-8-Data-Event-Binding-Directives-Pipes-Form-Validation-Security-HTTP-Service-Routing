
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService   {

  posts:any[];
  private url ='https://jsonplaceholder.typicode.com/posts';

  constructor(private http : Http) {

  }
 
  getPosts(){
      return this.http.get(this.url);
  }

  createPost(post)
  {
      return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post)
  {
      return this.http.patch(this.url+'/'+post.id, JSON.stringify({isRead : true}));
  }

  deletePost(post)
  {
  return this.http.delete(this.url+'/'+post.id);
  }
}   
