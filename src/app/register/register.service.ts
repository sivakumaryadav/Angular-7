import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class RegisterService {

    constructor(private httpClient:HttpClient){

    }

    register(user: User){
        this.httpClient.post('http://localhost:9090/user/createUser', user).subscribe(data => {
        console.log(data);
        });
    }
}