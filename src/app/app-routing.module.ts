import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TalentComponent } from './talent/talent.component';
import { PermhiringComponent } from './talent/permhiring/permhiring.component';
import { ProjectComponent } from './project/project.component';
import { ReportsComponent } from './reports/reports.component';
import { ReqBusinessComponent } from './project/req-business/req-business.component';
import { ReqServiceComponent } from './project/req-service/req-service.component';
import { ReqProjectComponent } from './project/req-project/req-project.component';
import { VendorComponent } from './vendor/vendor.component';
import { AddVendorComponent } from './vendor/add-vendor/add-vendor.component';
import { SearchVendorComponent } from './vendor/search-vendor/search-vendor.component';
import { TemstaffComponent } from './talent/temstaff/temstaff.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { SearchContactComponent } from './contact/search-contact/search-contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component';
import { AppComponent } from '../app/app.component';

const routes: Routes = [
//Nav
{ path: 'nav', component: NavComponent},

// Login
{ path: '', component: LoginComponent},
{ path: 'login', component: LoginComponent},

{ path: 'logout', component: LogoutComponent},
{ path: 'app', component: AppComponent},

// Header
{ path: 'header', component: HeaderComponent},

// Dash Board
{ path: 'dashboard', component: DashboardComponent},

// Vendor
{ path: 'vendor', component: VendorComponent},
{ path: 'addVendor', component: AddVendorComponent},
{ path: 'searchVendor', component: SearchVendorComponent},

// Talent
{ path: 'talent', component: TalentComponent },
{ path: 'permhiring', component: PermhiringComponent},
{ path: 'temphiring', component: TemstaffComponent},

// Project 
{ path: 'project', component: ProjectComponent},
{ path: 'businessReq', component:ReqBusinessComponent},
{ path: 'serviceReq', component:ReqServiceComponent},
{ path: 'projectReq', component:ReqProjectComponent},

// Employee
{ path: 'employee', component: EmployeeComponent},
{ path: 'addEmployee', component:AddEmployeeComponent},
{ path: 'searchEmployee', component: SearchEmployeeComponent},

// Contact
{ path: 'contact', component: ContactComponent},
{ path: 'addEmployee', component:AddContactComponent},
{ path: 'searchEmployee', component: SearchContactComponent},

//Reports
{ path: 'reports', component: ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

