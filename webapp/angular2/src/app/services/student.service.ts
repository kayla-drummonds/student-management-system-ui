import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../common/student';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8006/students/v1';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<GetResponseStudents>(this.baseUrl).pipe(
      map(response => response._embedded.students)
    )
  }
}

interface GetResponseStudents {
  _embedded: {
    students: Student[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
