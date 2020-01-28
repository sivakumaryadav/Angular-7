import { Component, OnInit, ViewChild } from '@angular/core';
import { Router }  from '@angular/router';
import { AgGridNg2 } from 'ag-grid-angular';
import { Candidate } from '../_module/Candidate';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { TalentService } from '../_services/talent.service';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css'],
  providers:[TalentService]
})
export class TalentComponent implements OnInit {
  @ViewChild('agGrid', {static: false}) agGrid: AgGridNg2;
  private rowData: Candidate[];
  private columnDefs: ColDef[];
  // gridApi and columnApi
  private api: GridApi;
  private columnApi: ColumnApi;
  
  constructor(private router: Router, private talentService: TalentService) {
    this.columnDefs = this.createColumnDefs();
   }

  ngOnInit() {
    this.talentService.getAllCandidates().subscribe(
      candidates => {
        this.rowData = candidates;
      }
    );
  }

  private createColumnDefs() {
    return [
      {headerName: 'ID', lockPosition: true, valueGetter: 'node.rowIndex + 1', cellClass: 'locked-col', width: 120, suppressNavigable: true, checkboxSelection: true},
      {headerName: 'First Name', field: 'firstName', sortable: true, filter: true},
      {headerName: 'Last Name', field: 'lastName', sortable: true, filter: true},
      {headerName: 'Middle Name', field: 'middleName', sortable: true, filter: true},
      {headerName: 'E-Mail', field: 'primaryEmail', sortable: true, filter: true},
      {headerName: 'Key Skills', field: 'keySkills', sortable: true, filter: true},
      {headerName: 'City', field: 'city', sortable: true, filter: true},
      {headerName: 'Owner', field: 'owner', sortable: true, filter: true},
      {headerName: 'Created', field: 'enteredBy', sortable: true, filter: true},
      {headerName: 'Best Time To Call', field: 'bestTimeToCall', sortable: true, filter: true},
      {headerName: 'Status', field: 'eeoDisabilityStatus', sortable: true, filter: true}
    ]
  }

  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.sizeColumnsToFit();
  }

}