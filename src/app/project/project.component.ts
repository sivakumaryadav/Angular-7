import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { AgGridNg2 } from 'ag-grid-angular';
import { ProjectService } from '../_services/project.service';
import { Project } from '../_module/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  @ViewChild('agGrid', {static: false}) agGrid: AgGridNg2;
  private rowData: Project[];
  private columnDefs: ColDef[];
  private api: GridApi;
  private columnApi: ColumnApi;

  constructor(private router:Router, private projectService: ProjectService) {
    this.columnDefs = this.createColumnDefs();
   }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
      candidates => {
        this.rowData = candidates;
        console.log(candidates);
      }
    );
  }
  
  private createColumnDefs() {
    return [
      {headerName: 'ID', lockPosition: true, valueGetter: 'node.rowIndex + 1', cellClass: 'locked-col', width: 120, suppressNavigable: true, checkboxSelection: true},
      {headerName: 'Title', field: 'title', sortable: true, filter: true},
      {headerName: 'Vendor', field: 'vendor', sortable: true, filter: true},
      {headerName: 'Line Of Business', field: 'lineOfBusiness', sortable: true, filter: true},
      {headerName: 'Type', field: 'projectType', sortable: true, filter: true},
      {headerName: 'Business Unit', field: 'businessUnit', sortable: true, filter: true},
      {headerName: 'Budget', field: 'budget', sortable: true, filter: true},
      {headerName: 'Start Date', field: 'startDate', sortable: true, filter: true},
      {headerName: 'End Date', field: 'endDate', sortable: true, filter: true}
    ]
  }

  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.sizeColumnsToFit();
  }

}
