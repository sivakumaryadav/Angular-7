import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../_services/talent.service';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/_module/Candidate';
import { Talent } from 'src/app/_module/Talent';

@Component({
  selector: 'app-permhiring',
  templateUrl: './permhiring.component.html',
  styleUrls: ['./permhiring.component.css'],
  providers: [TalentService]
})
export class PermhiringComponent implements OnInit {
  
  candidates: Candidate[];
  dates = [{"name": 'Jan'},{"name": 'Feb'},{"name": 'Mar'},{"name": 'Apr'},{"name": 'May'},{"name": 'Jun'},
           {"name": 'Jul'},{"name": 'Aug'},{"name": 'Sep'},{"name": 'Oct'},{"name": 'Nov'},{"name": 'Dec'}];
  sources = [{"name": 'LinkedIn'},{"name": 'Monster'},{"name": 'Naukri'},{"name": 'Referral'}];
  candidate: Candidate = new Candidate();
  constructor(private talentService: TalentService, private router: Router) {
  }

  talent: Talent = new Talent();
  talents: Talent[];

  ngOnInit() {
    this.talentService.getAllTalents().subscribe(data=>{
      this.talents = data;
    })
  }

  addCandidates(candidate : Candidate){
    console.log("Candidate Component Invoked...");
    console.log(this.candidate);
    this.talentService.addCandidate(this.candidate);
  }

  backToCandidates(){
    this.router.navigate(['/talent']); 
  }

  addTalent(talent: Talent){
    console.log(talent);
    this.talentService.addTalent(talent);
  }

  reset(){
    this.talent = new Talent();
  }

  backToTalent(){
    this.router.navigate(['/talent']);
  }
}
