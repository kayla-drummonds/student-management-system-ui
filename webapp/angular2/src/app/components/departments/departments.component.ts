import { Component } from '@angular/core';
import { Department } from 'src/app/common/department';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  departments: Department[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.listDepartments();
  }

  listDepartments() {
    this.courseService.getDepartments().subscribe(
      (data) => {
        this.departments = data;
      }
    )
  }

}
