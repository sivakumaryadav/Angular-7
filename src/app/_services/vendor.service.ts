import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '../_module/Vendor';

@Injectable({
    providedIn: "root"
})
export class VendorService{
    constructor(private http: HttpClient){
    }

    getAllVendors(){
        console.log("Vendor get Service Invoked...");
        return this.http.get<Vendor[]>("http://localhost:9090/vendor/findAllVendors");
      }
  
    createVendor(vendor : Vendor){
      console.log("Vendor Add Service Invoked...");
      console.log(vendor.name); 
      this.http.post('http://localhost:9090/vendor/createVendor', vendor).subscribe(data => {
        console.log(data);
      });
    }

    getVendorNames(){
      return this.http.get<Vendor[]>("http://localhost:9090/vendor/findVendors");
    }
}