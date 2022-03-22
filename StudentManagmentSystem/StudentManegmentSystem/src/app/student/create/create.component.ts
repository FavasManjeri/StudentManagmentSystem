import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentmanagmentService } from 'src/app/studentmanagment.service';
import { FormGroup,FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
submitted=false
hide=false
id:any
  constructor(private stdserv:StudentmanagmentService,private toast:ToastrService,private router:Router,private ActRoute:ActivatedRoute) { }
 
  newStudent:any=new FormGroup({
    Name:new FormControl('',[Validators.required]),
    Age:new FormControl('',[Validators.required]),
    Address:new FormControl('',[Validators.required]),
    Email:new FormControl('',[Validators.required,Validators.email]),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
  })

get AllControls(){
  return this.newStudent.controls
}
  ngOnInit(){
   
this.id=this.ActRoute.snapshot.paramMap.get('id')
this.stdserv.getStudentById(this.id).subscribe((res:  any)=>{
 this.newStudent=new FormGroup({
   id:new FormControl(res['id'],[Validators.required]),
    Name:new FormControl(res['name'],[Validators.required]),
    Age:new FormControl(res['age'],[Validators.required]),
    Address:new FormControl(res['address'],[Validators.required]),
    Email:new FormControl(res['email'],[Validators.required,Validators.email]),
    phoneNumber:new FormControl(res['phoneNumber'],[Validators.required,Validators.pattern('[0-9]{10}')]),
  })
})

  }
  onSubmitted(){

    if(this.id){
      this.stdserv.editStudent(this.id,this.newStudent.value).subscribe((res:any)=>{
       
          this.toast.success('Successfuly Updated','Success')
        this.router.navigate(['/student'])
        
      })
    }else{
      this.submitted=true
      console.log(this.newStudent.value);
     
 this.stdserv.addStudent(this.newStudent.value).subscribe((res:any)=>{
  
   if(res){
   this.toast.success('Successfuly Inserted','Success')
 this.router.navigate(['/student'])
 }
 })
    }
  
  }
}
