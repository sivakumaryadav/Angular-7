import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/_services/project.service';
import { Project } from 'src/app/_module/Project';
import { VendorService } from 'src/app/_services/vendor.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService  } from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, MouseEventArgs, addClass, removeClass, Browser } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-req-business',
  templateUrl: './req-business.component.html',
  styleUrls: ['./req-business.component.css'],
  providers: [ProjectService, ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService ]
})
export class ReqBusinessComponent implements OnInit {
  
        public tools: object = {
            items: ['Undo', 'Redo', '|',
                'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'SubScript', 'SuperScript', '|',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
                'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
                'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
        };
        public quickTools: object = {
            image: [
                'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '-', 'Display', 'AltText', 'Dimension']
        };

    public maxLength: number = 1000;
    

  project: Project = new Project();

  projectNames: string[];
  projectStatus: string[];
  vendors: string[];

  constructor(private router: Router, private projectService: ProjectService, private vendorService: VendorService) { }

  ngOnInit() {
     this.projectService.getProjectTypes().subscribe(data =>{
      this.projectNames = data;
    });
    this.projectService.getProjectStatus().subscribe(data=>{
      this.projectStatus = data;
    })

    this.vendorService.getAllVendors();
  }

  addProject(project: Project){
    this.projectService.addProject(project);
    this.project = new Project();
  }

  backToCandidates(){
    this.router.navigate(['/project']); 
  }

  reset(){
    this.project = new Project();
  }
}
