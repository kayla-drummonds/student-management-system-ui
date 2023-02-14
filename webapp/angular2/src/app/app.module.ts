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

@NgModule({
  declarations: [
    StudentCoursesComponent,
    CoursesComponent,
    DepartmentsComponent,
    FacultyComponent,
    StudentsComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
