import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../register/user';
import { Login } from '../_module/login';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class LoginService{
temp: any;
data: any;
constructor(private httpClient: HttpClient){
}

public validate(login: Login): Observable<User>{
    console.log(login);
    this.temp = this.httpClient.post<User>("http://localhost:9090/user/validateUser", login).subscribe (data=>{
        this.data=data;
        console.log(this.data);
    });
    console.log("Login Service");
    this.setData(this.data);
    console.log(this.data);
    return this.data;
    // console.log(this.temp);
    // this.setData(this.temp);
    // return this.temp;
}
setData(item: any) {

    this.data = item;
}
getData() {
    return this.data;
    console.log(this.data);
}

// public setData(data) {
//     return this.loginTo = data.accessLevel; 
// }

// public getData() {
//     return this.loginTo; 
// }

}