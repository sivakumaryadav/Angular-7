import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoginService } from '../_services/login.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  departmentDropdownSettings = {};
  departmentList: any;
  constructor(private http: HttpClient, private loginService:LoginService) { }

  ngOnInit() {
    this.getDepartments();
    this.departmentDropdownSettings = {
      singleSelection: false,
      idField: 'departmentId',
      textField: 'departmentDesc',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getDepartments() {
    this.http.get('assets/sample.json').subscribe(
      data => {
        this.departmentList = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

}
