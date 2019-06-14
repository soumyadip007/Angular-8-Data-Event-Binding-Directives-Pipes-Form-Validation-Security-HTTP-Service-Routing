import { Directive,HostListener, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;

  constructor(private el:ElementRef) { }
  // @HostListener('focus') onFocus(){
  //   console.log("On Focus");
  // }

  @HostListener('blur') onBlur(){
   // console.log("On Blur");
    let val=this.el.nativeElement.val;
    if(this.format == 'lowercase')
      this.el.nativeElement.val=val.toLowerCase();
    else
    this.el.nativeElement.val=val+val;
  }



}