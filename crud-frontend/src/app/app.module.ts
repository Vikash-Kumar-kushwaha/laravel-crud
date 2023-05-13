import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material-file/material-module/material-module.module';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { EmployeeTableDataComponent } from './component/employee-table-data/employee-table-data.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { NavTopComponent } from './component/nav-top/nav-top.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsdInrPipe } from './custPipe/usd-inr.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DialogBoxComponent,
    EmployeeTableDataComponent,
    LoginPageComponent,
    NavTopComponent,
    UsdInrPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MaterialModuleModule,
    FormControl,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
