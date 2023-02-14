import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../common/department';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl = 'http://localhost:8006/departments';
  constructor(private http: HttpClient) { }

  getDepartments(): Observable<GetResponseDepartments> {
    const url = `${this.baseUrl}`;
    return this.http.get<GetResponseDepartments>(url);
  }
}

interface GetResponseDepartments {
  _embedded: {
    departments: Department[];
  }
}
