import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../register/user';
import { LoginService } from '../_services/login.service';
import { Login } from '../_module/login';
import { Observable } from 'rxjs';
import { SharedService } from '../_services/shared.service';
import { HeaderService } from '../header/header.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService, public nav: HeaderService) { }
  logins: Login[];
  loginTo: any;
  users: User[];
  user: User = new User();
  data:any;
  loginSuccess: boolean = true;

  login: Login= new Login();
  ngOnInit() {
    
  }

validate(login: Login){
  this.data = this.loginService.validate(login);
  this.nav.show(); 
  this.router.navigate(['dashboard']);
  console.log("Login Controller");
    // console.log(this.data);
    // if(this.data.userName!=null){
    //        this.router.navigate(['dashboard']);
    //        this.loginSuccess = false;
    // }  
    // this.user = response;
    // console.log("Login Controller responce...");
    // if(this.user.userName!=null){
    //   console.log(response.accessLevel);
    //     this.router.navigate(['dashboard']);
    //     this.loginSuccess = false;
    //   }  
}

  
}
