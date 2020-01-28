import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private rigisterService: RegisterService) { }

  ngOnInit() {
  }

  rigisterUser(user: User){
    this.rigisterService.register(user);
  }

}
