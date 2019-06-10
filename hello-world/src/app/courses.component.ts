import { Component } from '@angular/core';

@Component({
    selector: 'courses' ,     // <div class="courses"> --->   .courses  & # for id
    template: ' <h2>{{getTitle() }} or  {{title}} </h2> <ul>   <li *ngFor="let x of courses">{{x}} </li></ul>'
})
export class CourseComponent{

    title="List of courses"

    courses=["C","JAVA","CPPs"]
    getTitle(){

        return this.title
    }
}