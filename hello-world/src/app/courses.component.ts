import { Component } from '@angular/core'

@Component({
    selector: 'courses' ,     // <div class="courses"> --->   .courses  & # for id
    template:'<h2>{{title}}<h2>'
})
export class CourseComponent{

    title="List of courses"
}