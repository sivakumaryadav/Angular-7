import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { Router } from '@angular/router';
import { TalentService } from '../_services/talent.service';
import { Candidate } from '../_module/Candidate';
import { LoginService } from '../_services/login.service';
import { SharedService } from '../_services/shared.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {
  @ViewChild('agGrid', {static: false}) agGrid: AgGridNg2;
  isLoggedIn$: boolean;
  private rowData: Candidate[];
  private importantCandidatesColumnDefs: ColDef[];
  private recentHiresColumnDefs: ColDef[];
  private api: GridApi;
  private columnApi: ColumnApi;
  

  public recentHiresInd: boolean = true;
  public importantCandidatesInd: boolean = true;
  
  constructor(private router: Router, private talentService: TalentService, private loginService: LoginService, private sharedService: SharedService) {
    
    this.recentHiresColumnDefs = this.createRecentHiresColumnDefs();
    this.importantCandidatesColumnDefs = this.createImportantCandidatesColumnDefs();
    var gridOptions = {
      defaultColDef: {
          // allow every column to be aggregated
          enableValue: true,
          // allow every column to be grouped
          enableRowGroup: true,
          // allow every column to be pivoted
          enablePivot: true,
          sortable: true,
          filter: true
      },
      columnDefs: this.createRecentHiresColumnDefs(),
      sideBar: true
  };
  }

  ngOnInit() {
    this.isLoggedIn$  =  this.sharedService.loggedIn.value;
    this.talentService.getAllCandidates().subscribe(
      candidates => {
        this.rowData = candidates;
      }
    );
    console.log("Dashboard Controller...");
    console.log(this.loginService.getData());
  }

  private createRecentHiresColumnDefs() {
    return [
      {headerName: '', lockPosition: true, cellClass: 'locked-col', width: 50, checkboxSelection: true},
      {headerName: 'ID', valueGetter: 'node.rowIndex + 1', cellClass: 'locked-col', width: 50, suppressNavigable: true},
      {headerName: 'Name', field: 'firstName', sortable: true, filter: true},
      {headerName: 'Job Position / Code', field: 'lastName', sortable: true, filter: true},
      {headerName: 'Vendor', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Dead Line', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Priority', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Status', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Date of Hire', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Action', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Remarks', field: 'primaryEmail', sortable: true, filter: true}
    ]
  }

  private createImportantCandidatesColumnDefs() {
    return [
      {headerName: '', lockPosition: true, cellClass: 'locked-col', width: 50, checkboxSelection: true},
      {headerName: 'ID', valueGetter: 'node.rowIndex + 1', cellClass: 'locked-col', width: 50, suppressNavigable: true},
      {headerName: 'First Name', field: 'firstName', sortable: true, filter: true},
      {headerName: 'Last Name', field: 'lastName', sortable: true, filter: true},
      {headerName: 'City', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Position / Posted Date', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Key Skills', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Vendor', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Vendor Posted Date', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Submitted By', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Status', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Publish Date', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Join Date', field: 'primaryEmail', sortable: true, filter: true}
    ]
  }

}
