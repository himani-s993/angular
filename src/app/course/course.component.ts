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
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title: string;
  courses: any[];

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit(): void {
    this.title = 'Hello World!';
  }

  getTitle() {
    return this.title;
  }

}
