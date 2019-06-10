import { Component } from '@angular/core'

@Component({
    selector: 'courses' ,     // <div class="courses"> --->   .courses  & # for id
    template:'<h2>{{getTitle()+ " or "+ title}} <h2>'
})
export class CourseComponent{

    title="List of courses"

    
    getTitle(){

        return this.title;
    }
}