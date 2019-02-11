import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.minLength(2)]),
    lastname:new FormControl(),
    age:new FormControl('',[Validators.required,Validators.min(18)]),
    location:new FormControl('',[Validators.required,Validators.minLength(3)])
  });
  url="https://api.mlab.com/api/1/databases/angdec18/collections/student?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  addStudent(){
    console.log(this.studentForm.value);
    this.http.post(this.url,this.studentForm.value).subscribe((res)=>{console.log(res)})
  }
  resetStudentForm(){
    this.studentForm.reset();
  }
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }


}
