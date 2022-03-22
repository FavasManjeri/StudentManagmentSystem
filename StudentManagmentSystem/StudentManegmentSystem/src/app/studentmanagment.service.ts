import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentmanagmentService {

  readonly studentmanagmentApiUrl="https://localhost:7194/api";
  constructor(private http:HttpClient) { }
// New User
  addNewUser(data:any){
    return this.http.post<any>(this.studentmanagmentApiUrl+'/Users',data);
  }
  getUsersList(){
    return this.http.get<any>(this.studentmanagmentApiUrl+'/Users')
  }
  
  // Student
  getStudentList():Observable<any[]>{
    return this.http.get<any>(this.studentmanagmentApiUrl+'/Students');
  }
  addStudent(data:any){
    return this.http.post<any>(this.studentmanagmentApiUrl+'/Students',data);
  }
  getStudentById(id:any){
    return this.http.get<any>(this.studentmanagmentApiUrl+`/Students/${id}`);
  }
  editStudent(id:any,data:any){
    return this.http.put<any>(this.studentmanagmentApiUrl+`/Students/${id}`,data);
  }
  deleteStudent(id:any){
    return this.http.delete<any>(this.studentmanagmentApiUrl +`/Students/${id}`);
  }

}
