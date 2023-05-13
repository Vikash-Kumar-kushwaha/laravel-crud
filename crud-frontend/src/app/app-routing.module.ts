import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableDataComponent } from './component/employee-table-data/employee-table-data.component';
import { LoginPageComponent } from './component/login-page/login-page.component';


const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'employee-table-data',component:EmployeeTableDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
