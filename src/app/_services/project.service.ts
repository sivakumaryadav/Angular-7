import { Injectable } from '@angular/core';
import { Project } from '../_module/Project';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:"root"
})
export class ProjectService {
     constructor(private httpClient: HttpClient){
     }

     addProject(project: Project){
         console.log(project);
         this.httpClient.post('http://localhost:9090/project/createProject', project).subscribe(data => {
            console.log(data);
            return data;
        });
    }

    getAllProjects(){
        return this.httpClient.get<Project[]>("http://localhost:9090/project/findAllProjects");
    }

    getProjectTypes(){
        return this.httpClient.get<string[]>("http://localhost:9090/project/projectTypes");
    }

    getProjectStatus(){
        return this.httpClient.get<string[]>("http://localhost:9090/project/projectStatus");
    }

}