import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public http:HttpClient,public router:Router) { }
  data:any;
  ngOnInit() {
  }
  login(user){
    console.log(user)
    this.http.post("http://localhost:4000/login",user).subscribe((res)=>{
      this.data = res;
      localStorage.setItem('jwtToken', this.data.token);
      this.router.navigate(['xyz'])
    })
  }
}
