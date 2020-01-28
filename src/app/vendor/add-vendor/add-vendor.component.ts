import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/_module/Vendor';
import { VendorService } from 'src/app/_services/vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  vendor: Vendor = new Vendor();
  vendors: Vendor[];

  constructor(private router: Router, private vendorService: VendorService) { }

  ngOnInit() {
  }

  createVendor(vendor: Vendor){
    console.log(vendor);
    console.log("Add Vendor Component invoked...");
    this.vendorService.createVendor(vendor)
  }

  backToCandidates(){
    this.router.navigate(['/project']); 
  }

  reset(){
    this.vendor = new Vendor();
  }
}
