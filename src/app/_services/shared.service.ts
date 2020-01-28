import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SharedService{
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
    constructor(){
      this.loggedIn.next(true);
     // alert("My intial global variable value is: " + this.myGlobalVar);
    }

    // setMyGV(val: boolean){
    //   this.myGlobalVar = val;
    // }

    // getMyGV(){
    //   return this.myGlobalVar;
    // }
}