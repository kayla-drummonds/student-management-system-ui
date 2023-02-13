import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor(private http: HttpClient) {

  }
  private baseUrl: string = 'http://localhost:8006/api';
  courses!: Course[];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl + '/courses/v1');
  }

}

export interface Course {
  id: number;
  name: string;
  department: Department;
  links: string;
}

export class CourseRequest {
  id: number;
  name: string;
  department: Department;

  constructor(
    id: number,
    name: string,
    department: Department
  ) {
    this.id = id;
    this.name = name;
    this.department = department;
  }
}

export class Department {
  id: number;
  name: string;

  constructor(
    id: number,
    name: string
  ) {
    this.id = id;
    this.name = name;
  }
}
