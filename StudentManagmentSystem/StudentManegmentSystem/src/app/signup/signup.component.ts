import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentmanagmentService } from '../studentmanagment.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
submitted=false
hide=true
  constructor( private fb:FormBuilder,private usrserv:StudentmanagmentService,private toast:ToastrService,private rout:Router) { }
  signupForm=new FormGroup({
    username: new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    postalcode:new FormControl('',[Validators.required]),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
    email:new FormControl('',[Validators.required,Validators.email])
  })
  ngOnInit(): void {
  }
  get AllControls(){
    return this.signupForm.controls
  }
  onSumbit(values:any){
this.submitted=true
console.log(values);
this.usrserv.addNewUser(this.signupForm.value).subscribe((res:any)=>{
  if(res){
    this.toast.success('Successfuly Inserted','Success')
  this.rout.navigate(['/'])
  }
  
      })
  }
}
