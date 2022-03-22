import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';

import { StudentmanagmentService } from '../studentmanagment.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submited=false
  hide=true 
  constructor(private fb:FormBuilder,private router:Router,private serv:StudentmanagmentService) { }

  loginForm=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });
  ngOnInit(): void {
  }
  get AllControles(){
    return this.loginForm.controls
  }
  onSubmit(values:any){
    this.submited=true
    console.log(values);
    this.serv.getUsersList().subscribe((res)=>{
      const user =res.find((a:any)=>{
        return a.userName===this.loginForm.value.userName && a.password === this.loginForm.value.password
      });
      if(user){
        alert('Login is Success')
        this.router.navigate(['/student'])
      }  
    })
    
  }
  onSignup(){
this.router.navigate(['/signup'])
  }
}
