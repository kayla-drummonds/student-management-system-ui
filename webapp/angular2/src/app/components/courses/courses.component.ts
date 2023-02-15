import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/common/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  currentDepartmentId: number = 1;
  previousDepartmentId: number = 1;
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.listCourses();
      }
    )
  }

  listCourses() {
    this.handleListCourses();
  }

  handleListCourses() {
    const hasDepartmentId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasDepartmentId) {
      this.currentDepartmentId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      this.currentDepartmentId = 1;
    }

    if (this.previousDepartmentId != this.currentDepartmentId) {
      this.thePageNumber = 1;
    }

    this.previousDepartmentId = this.currentDepartmentId;

    this.courseService.getCourseListPaginate(this.thePageNumber - 1, this.thePageSize, this.currentDepartmentId).subscribe(
      (data) => {
        this.courses = data._embedded.courses;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
      }
    );
  }

}