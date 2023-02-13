import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { CoursesComponent } from './courses/courses.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentsComponent } from './students/students.component';
import { AppComponent } from './app.component';

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
