import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/common/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
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

export class DepartmentRequest {
  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }
}