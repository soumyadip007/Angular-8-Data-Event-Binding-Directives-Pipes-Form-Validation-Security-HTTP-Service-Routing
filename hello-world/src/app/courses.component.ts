import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses' ,     // <div class="courses"> --->   .courses  & # for id
    template: ` <h2>{{getTitle() }} or  {{title}} </h2>
     <ul>   <li *ngFor="let x of courses">{{x}} </li>   </ul>
     <button class="btn btn-primary"  [class.active]="isActive" >Class binding </button>
    <br><br>
     <div (click)="onDivClick()">
        <button class="btn btn-primary"  (click)="onClick($event)" >Event binding</button>
     </div>
     `
})
export class CourseComponent{

    title="List of courses"
    getTitle(){

        return this.title
    }

     //  courses=["C","JAVA","CPP"]
     courses;

     constructor(service : CoursesService){
       //  let service=new CoursesService();
    
         this.courses= service.getCourses();
     }
     isActive=true;

     onClick($event)
     {
    event.stopPropagation();
         console.log("Button is clicked",$event);
     }

     onDivClick()
     {
         console.log("Div is clicked");
     }
    
}