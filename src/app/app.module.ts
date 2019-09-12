import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http'; 
import {DataTablesModule} from 'angular-datatables';   
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminService } from './services/admin.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'' , redirectTo : 'login', pathMatch:'full'},
      
    {  
      path : 'login',  
      component : LoginComponent    
    },  
      
    {  
      path : 'signup',  
      component : SignupComponent   
    }, 
    { path: 'home', component: HomeComponent, children: [
      {  path: 'view-student', component: StudentListComponent},
      { path: 'add-student', component: AddStudentComponent}
    ] } ,
    {  
      path : 'profile',  
      component : ProfileComponent  
    },  
 
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AddStudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    DataTablesModule
    
    
  ],
  providers: [ 
    AdminService 
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
