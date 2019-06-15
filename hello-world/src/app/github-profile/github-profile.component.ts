import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {

  constructor( private route: ActivatedRoute) { }

  // ngOnInit() {
  //  this.route.paramMap.subscribe(params =>{});
   
  //   // this.route.paramMap
  //   // .subscribe(params =>{
  //   //  let id= +params.get('id');
  //   //   console.log(id);
  //   // });
  // }

}
