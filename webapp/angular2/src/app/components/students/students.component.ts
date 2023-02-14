import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/common/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(private studentService: StudentService, private http: HttpClient) {

  }

  private baseUrl: string = 'http://localhost:8006/students/v1';
  public submitted: boolean = false;
  studentsearch!: FormGroup;
  students: Student[] = [];
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
    this.http.post(this.baseUrl, bodyString, customOptions).subscribe(
      (sc) => console.log(sc)
    );
  }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}?course=${this.currentCourseVal}&progress=${this.currentProgressVal}`);
  }

}

export class StudentRequest {

  constructor(public id: number, public name: string, public username: string, public email: string, public password: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

export interface StudentSearch {
  course: string;
  progress: number;
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

