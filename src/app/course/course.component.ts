import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
    <h2> {{ getTitle() }} </h2>
    <ul>
      <li *ngFor="let course of courses ">
        {{ course }}
      </li>
    </ul>
    <br/>
    <h4> Bubble up Event <h4>
    <div (click)="onDivClicked($event)">
      <button class="btn btn-primary" (click)="onButtonClicked($event)">Save</button>
    </div>
    <br/>
    <h4> Two way binding <h4>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/><br/>
    <h4> Pipers for formating <h4>
    {{ name | uppercase }} <br/>
    {{ address | lowercase }} <br/>
    {{ contact | number }} <br/>
    {{ price | number:'1.2-2' }} <br/>
    {{ price | currency:'AUD' }} <br/>
    {{ title | summary }}
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title: string;
  courses: any[];
  email = "test@domain.com";

  name = 'Himani';
  address = 'Pune';
  contact = 12345;
  price = 123;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit(): void {
    this.title = 'Hello World!';
  }

  getTitle() {
    return this.title;
  }

  onDivClicked($event) {
    console.log("Div clicked ", $event);
  }

  onButtonClicked($event) {
    event.stopPropagation();
    console.log("Button clicked ", $event);
  }

  onKeyUp() {
    console.log('Enter Pressed ', this.email);
  }

}
