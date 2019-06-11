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
     <br><br>
    <input class="form-control" [value]="email" (keyup.enter)="email=$event.target.value;   onKeyUpp()"  /> 
    <br><br>
    <input class="form-control" [(ngModel)]="email" (keyup.enter)="onKeyUpp()"  /> 
    <br><br>
    <h4>---------------PIPES------------------</h4>
    {{ course.title | uppercase }}<br>
    {{ course.rating |number:'2.2-2' }}<br>
    {{ course.students | number }}<br>
    {{ course.price | currency:'INR':true:'3.2' }}<br>
    {{ course.releaseDate | date:'shortDate' }}<br>

    <br><br>
    <h4>---------------CUSTOM PIPES------------------</h4>
    {{ text.hello | custom:10 }}<br>
  
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

    // <input class="form-control"  (keyup.enter)="onKeyUpp($event)"  /> 
    //  onKeyUpp($event)
    //  {
    //      console.log("Enter is pressed & value is",$event.target.value);
    //  }
    

    // <input class="form-control" #email (keyup.enter)="onKeyUpp(email.value)"  /> 
    // onKeyUpp(email)
    // {
    //     console.log("Enter is pressed & value is",email);
    // }

    email="soumyadip.note@gmail.com";  //preplotted value

    onKeyUpp()
    {
        console.log(this.email)
    }

    //----------------------PIPES-----------------------------------//

    course = {
        title: "Welcome to Angular",
        rating: 5.989,
        students: 30400,
        price: 199.77,
        releaseDate : new Date(2019, 2, 19)
    }

      //----------------------CUSTOM PIPES-----------------------------------//

    text={

        hello: " Welcome to angular"

    }

}