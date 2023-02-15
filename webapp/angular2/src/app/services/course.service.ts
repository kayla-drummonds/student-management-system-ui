import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../common/course';
import { Department } from '../common/department';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8006/courses';
  private departmentUrl = 'http://localhost:8006/departments';
  constructor(private http: HttpClient) { }

  getCourseListPaginate(thePage: number, thePageSize: number, theDepartmentId: number): Observable<GetResponseCourses> {
    const searchUrl = `${this.baseUrl}/search/findByDepartmentId?id=${theDepartmentId}&page=${thePage}&size=${thePageSize}`;
    return this.http.get<GetResponseCourses>(searchUrl);
  }

  getCourseList(theDepartmentId: number) {
    const searchUrl = `${this.baseUrl}/search/findByDepartmentId?id=${theDepartmentId}`;
    return this.getCourses(searchUrl);
  }

  private getCourses(searchUrl: string): Observable<Course[]> {
    return this.http.get<GetResponseCourses>(searchUrl).pipe(
      map(response => response._embedded.courses)
    );
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<GetResponseDepartment>(this.departmentUrl).pipe(
      map(response => response._embedded.department)
    );
  }
}

interface GetResponseCourses {
  _embedded: {
    courses: Course[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseDepartment {
  _embedded: {
    department: Department[];
  }
}
