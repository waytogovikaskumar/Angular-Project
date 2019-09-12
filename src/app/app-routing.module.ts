import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full'
  },   
    {  
      path : 'login',  
      component : LoginComponent    
    },  
    {  
      path : 'signup',  
      component : SignupComponent   
    },  
    {  
      path : 'profile/:adminId',  
      component : ProfileComponent  
    },  
  
  { path: 'view-student', component: StudentListComponent },  
  { path: 'add-student', component: AddStudentComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
