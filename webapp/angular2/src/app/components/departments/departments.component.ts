import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/common/department';
import { CourseService } from 'src/app/services/course.service';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.listDepartments();
      }
    )
  }

  listDepartments() {
    this.departmentService.getDepartments().subscribe(
      (data) => {
        this.departments = data._embedded.departments;
      }
    )
  }

}