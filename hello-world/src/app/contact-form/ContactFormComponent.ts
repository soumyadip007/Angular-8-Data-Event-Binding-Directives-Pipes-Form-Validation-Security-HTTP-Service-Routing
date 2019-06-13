import { Component } from '@angular/core';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  Contact = [
    { id: 1, name: "Email" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Fax" }
  ];
  log(x) {
    console.log(x);
  }
  submit(f) {
    f.value;
    console.log(f);
  }
}
