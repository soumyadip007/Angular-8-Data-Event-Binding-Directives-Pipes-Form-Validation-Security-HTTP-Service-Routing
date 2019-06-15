import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {

  constructor( private route: Router) { }

  submit(){
    this.route.navigate(['/followers'],{
      queryParams:{page:1, order: 'newest' }
    });

  // ngOnInit() {
  //  this.route.paramMap.subscribe(params =>{});
   
  //   this.route.paramMap
  //   .subscribe(params =>{
  //    let id= +params.get('id');
  //     console.log(id);
  //   });
  }  
}


