import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedService } from '../app/_services/shared.service';
import { AppComponent } from './app.component';
import { TalentComponent } from './talent/talent.component';
import { TemstaffComponent } from './talent/temstaff/temstaff.component';
import { PermhiringComponent } from './talent/permhiring/permhiring.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { ReportsComponent } from './reports/reports.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { ReqBusinessComponent } from './project/req-business/req-business.component';
import { ReqServiceComponent } from './project/req-service/req-service.component';
import { ReqProjectComponent } from './project/req-project/req-project.component';
import { VendorComponent } from './vendor/vendor.component';
import { AddVendorComponent } from './vendor/add-vendor/add-vendor.component';
import { SearchVendorComponent } from './vendor/search-vendor/search-vendor.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactComponent } from './contact/contact.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { SearchContactComponent } from './contact/search-contact/search-contact.component';
import { RouterModule } from '@angular/router';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { LoginService } from './_services/login.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EjsTextEditorComponent } from './ejs-text-editor/ejs-text-editor.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HeaderService } from './header/header.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TalentComponent,
    TemstaffComponent,
    PermhiringComponent,
    ProjectComponent,
    ReportsComponent,
    ReqBusinessComponent,
    ReqServiceComponent,
    ReqProjectComponent,
    VendorComponent,
    AddVendorComponent,
    SearchVendorComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    NavComponent,
    EmployeeComponent,
    ContactComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    AddContactComponent,
    SearchContactComponent,
    EjsTextEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    NgMultiSelectDropDownModule.forRoot(),
    RichTextEditorModule,
    NgbModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [ReqBusinessComponent],
  providers: [LoginService, SharedService, HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
