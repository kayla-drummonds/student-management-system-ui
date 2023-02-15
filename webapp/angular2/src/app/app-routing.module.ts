import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { StudentCoursesComponent } from './components/student-courses/student-courses.component';
import { StudentsComponent } from './components/students/students.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'department/:id', component: CoursesComponent },
  { path: 'department', component: CoursesComponent },
  { path: 'student-courses', component: StudentCoursesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'app', component: AppComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
