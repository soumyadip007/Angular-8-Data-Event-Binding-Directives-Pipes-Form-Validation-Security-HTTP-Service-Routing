import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('isFav') isFav: boolean;


  constructor() { }

  ngOnInit() {
  }
   onClick()
   {
     this.isFav = !this.isFav;
   }

}
