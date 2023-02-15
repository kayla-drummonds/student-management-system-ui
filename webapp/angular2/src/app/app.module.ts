import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { StudentCoursesComponent } from './components/student-courses/student-courses.component';
import { StudentsComponent } from './components/students/students.component';
import { RouterModule } from '@angular/router';
import { CourseService } from './services/course.service';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    StudentCoursesComponent,
    CoursesComponent,
    FacultyComponent,
    StudentsComponent,
    AppComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CourseService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
