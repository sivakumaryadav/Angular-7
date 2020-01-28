import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../_module/Candidate';
import { Talent } from '../_module/Talent';

@Injectable({
    providedIn:"root"
})
export class TalentService{
    candidate : Candidate;
    path : string = "http://localhost:9090"
    constructor(private http: HttpClient){
    }

    getAllCandidates(){
      return this.http.get<Candidate[]>("http://localhost:9090/candidate/findAllCandidates");
    }

    public addCandidate(candidate : Candidate){
    console.log(candidate.firstName);  
    this.http.post('http://localhost:9090/candidate/createCandidate', candidate).subscribe(data => {
      console.log(data);
      return data;
    });
  }

  getAllTalents(){
    return this.http.get<Talent[]>("http://localhost:9090/talent/findAllTalents");
  }

  public addTalent(talent : Talent){
    console.log("service Invoked...");
    console.log(talent);
    this.http.post('http://localhost:9090/talent/createTalent', talent);
  }
}