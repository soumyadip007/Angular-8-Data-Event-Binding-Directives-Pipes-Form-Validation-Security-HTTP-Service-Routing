import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class GithubFollowersService extends DataService {

  constructor(http: Http) {
    super('https://api.github.com/users/soumyadip007/followers', http);
  }
}





