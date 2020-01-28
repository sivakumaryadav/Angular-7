import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { Observable } from 'rxjs';
import { SharedService } from '../_services/shared.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  temp: any;
  isLoggedIn$: boolean;
  constructor(private router: Router, private loginService: LoginService, private nav: HeaderService) { }

  ngOnInit() {
    //this.isLoggedIn$ = this.sharedService.loggedIn.value;
    //this.sharedService.setMyGV(this.myGlobal);
    //this.myGlobalVar = this.sharedService.getMyGV();
    //alert(this.myGlobalVar);
    
    // this.temp = this.loginService.getData();
    // if(this.temp.accessLevel  === 1) {
    //   this.project = true;
    // }
  }

}
