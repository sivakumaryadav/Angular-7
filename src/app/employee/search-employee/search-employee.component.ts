import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  departmentDropdownSettings = {};
  departmentList: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDepartments();
    this.departmentDropdownSettings = {
      singleSelection: true,
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
