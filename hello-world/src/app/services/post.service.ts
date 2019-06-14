import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService extends DataService {
  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
   }
}
