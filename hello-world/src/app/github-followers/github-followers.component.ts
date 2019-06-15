import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route:ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( =>

    );
  //  let id=this.route.snapshot.paramMap.get('id');

    this.route.queryParamMap.subscribe();
    //let page=this.route.snapshot.queryParamMap.get('page');

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
