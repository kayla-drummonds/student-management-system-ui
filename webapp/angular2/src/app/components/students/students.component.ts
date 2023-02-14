import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(private http: HttpClient) {

  }

  private baseUrl: string = 'http://localhost:8006/students/v1';
  public submitted: boolean = false;
  studentsearch!: FormGroup;
  students!: Student[];
  currentCourseVal!: number;
  currentProgressVal!: number;

  ngOnInit() {
    this.studentsearch = new FormGroup({
      course: new FormControl(''),
      progress: new FormControl('')
    });

    const studentsearchValueChanges$ = this.studentsearch.valueChanges;
    studentsearchValueChanges$.subscribe(
      (valChange) => {
        this.currentCourseVal = valChange.course;
        this.currentProgressVal = valChange.progress;
      }
    )
  }

  addStudentCourse(value: number) {
    return new StudentCourseRequest(value, this.currentCourseVal, this.currentProgressVal);
  }

  onSubmit({ value, valid }: { value: StudentSearch, valid: boolean }) {
    this.getAll().subscribe(
      (students) => this.students = students
    );
  }

  updateStudent(value: number) {
    console.log("Student id: " + value);
  }

  deleteStudent(value: number) {
    console.log("Student id: " + value);
    return this.http.delete(this.baseUrl + '/students/v1/' + value);
  }

  createStudentCourse(body: StudentCourseRequest) {
    let bodyString = JSON.stringify(body);
    let customOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    this.http.post(this.baseUrl + '/students/v1', bodyString, customOptions).subscribe(
      (sc) => console.log(sc)
    );
  }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl + '/students/v1?course=' + this.currentCourseVal + '&progress=' + this.currentProgressVal);
  }

}

export interface StudentSearch {
  course: string;
  progress: number;
}

export interface Student {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  links: string;
}

export class StudentCourseRequest {
  student: number;
  course: number;
  progress: number;

  constructor(
    student: number,
    course: number,
    progress: number
  ) {
    this.student = student;
    this.course = course;
    this.progress = progress;
  }

}

