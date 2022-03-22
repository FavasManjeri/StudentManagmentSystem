import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateComponent } from './student/create/create.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'student',component:StudentComponent},
  {path:'create',component:CreateComponent},
  {path:'signup',component:SignupComponent},
  {path:'edit/:id',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
