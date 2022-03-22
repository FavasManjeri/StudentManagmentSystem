import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentmanagmentService } from '../studentmanagment.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router:Router,private stdserv:StudentmanagmentService,private toast:ToastrService) { }
  studentArray$!:Observable<any[]>;
  ngOnInit(): void {
   
    this.studentArray$=this.stdserv.getStudentList()
  //  this.stdserv.getStudentList().subscribe((res:any)=>{
  //   console.log(res);
  //   this.studentArray=res.item
  //  })
  }
  navigatetoedit(id:any){
    this.router.navigate([`/edit/${id}`])
  }

  onCreate(){
this.router.navigate(['/create'])
  }
  delete(id:any)
{
  if(confirm('Are you sure you want to delete!')){
this.stdserv.deleteStudent(id).subscribe((res:any)=>{
  this.toast.success('Successfuly Deleted','Success')
 this.ngOnInit()
})
}
}
}
