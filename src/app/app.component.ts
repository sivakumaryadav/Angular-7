import { Component } from '@angular/core';
import { LoginService } from './_services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'canopusapp';
  constructor(private loginService: LoginService) {}
  ngOnInit() {
    
  }
}
