import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { CoursesComponent } from './courses/courses.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'student-courses', component: StudentCoursesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'app', component: AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
