import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Response, HttpClient} from '@angular/common/http';
import {Observable, map, catchError} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private http:HttpClient) {

  }

  private baseUrl:string = 'http://localhost:8006/api';
  public submitted: boolean = false;
  studentsearch!: FormGroup;
  students!: Student[];
  
  ngOnInit() {
    this.studentsearch = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('')
    });
    this.students = STUDENTS;
  }

  onSubmit({value, valid}: {value:StudentSearch, valid:boolean}) {
    console.log(value);
  }

  createStudent(value:number) {
    console.log("Student id: " + value);
  }

  getAll() {
    this.http.get(this.baseUrl + '/students/v1');
  }

  mapStudent(response:Response):Student[] {
    return response.json().content;
  }
}

export interface StudentSearch {
  id:number;
  name:string;
}

export interface Student {
  id:number;
  name:string;
  username:string;
  email:string;
  password:string;
  links:string;
}

let STUDENTS:Student[] = [
  {
    "id": 13,
    "username" :"liligran1 ",
    "name" : "Lili Gran",
    "email" :"liligran@gmail.com",
    "password" : "liligran1",
    "links" : ""
  }, 
  {
    "id": 14,
    "username" :"tiffany2",
    "name" : "Tiffany Johnson",
    "email" :"tiffanyjohnson@gmail.com",
    "password" : "tiffany2",
    "links" : ""
  },
  {
    "id": 15,
    "username" :"kesha3",
    "name" : "Kesha Jackson",
    "email" :"keshajackson@gmail.com",
    "password" : "kesha3",
    "links" : ""
  }
]