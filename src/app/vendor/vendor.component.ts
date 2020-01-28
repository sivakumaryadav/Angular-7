import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridNg2 } from 'ag-grid-angular';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { Vendor } from '../_module/Vendor';
import { VendorService } from '../_services/vendor.service';
import { HttpClient} from '@angular/common/http';
import { LoginService } from '../_services/login.service';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
  providers: [VendorService]
})
export class VendorComponent implements OnInit {

  @ViewChild('agGrid', {static: false}) agGrid: AgGridNg2;
  private rowData: Vendor[];
  private columnDefs: ColDef[];
  private api: GridApi;
  private columnApi: ColumnApi;
  departmentDropdownSettings = {};
  departmentList: any;
  
  constructor(private router: Router, private vendorService: VendorService,private http: HttpClient, private loginService:LoginService) { 
    this.columnDefs = this.createColumnDefs();
  }

  ngOnInit() {
    this.vendorService.getAllVendors().subscribe(
      vendors => {
        this.rowData = vendors;
      }
    );
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
  onAddClick(){
    this.router.navigate(['/addVendor']); 
  }

  onSearchClick(){
    this.router.navigate(['/searchVendor']); 
  }

  private createColumnDefs() {
    return [
      {headerName: 'ID', lockPosition: true, valueGetter: 'node.rowIndex + 1', cellClass: 'locked-col', width: 120, suppressNavigable: true, checkboxSelection: true},
      {headerName: 'Vendor Name', field: 'name', sortable: true, filter: true},
      {headerName: 'Location', field: 'address', sortable: true, filter: true},
      {headerName: 'City', field: 'city', sortable: true, filter: true},
      {headerName: 'State', field: 'state', sortable: true, filter: true},
      {headerName: 'Zip', field: 'postalCode', sortable: true, filter: true},
      {headerName: 'Primary Contact', field: 'phone1', sortable: true, filter: true},
      {headerName: 'Secondary Contact', field: 'phone2', sortable: true, filter: true},
      {headerName: 'Web Site', field: 'url', sortable: true, filter: true},
      {headerName: 'Fax', field: 'fax', sortable: true, filter: true}
    ]
  }

  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.sizeColumnsToFit();
  }

}
