import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses' ,     // <div class="courses"> --->   .courses  & # for id
    template: ' <h2>{{getTitle() }} or  {{title}} </h2> <ul>   <li *ngFor="let x of courses">{{x}} </li></ul>'
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


    
}