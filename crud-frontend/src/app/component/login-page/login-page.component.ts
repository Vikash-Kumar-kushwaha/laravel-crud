import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  hide = true;
  value = false;
  id: number = 1;
  constructor(
    private _formbuilder: FormBuilder,
    private _empService: EmployeeService,
    private _router: Router
  ) {
    this.loginForm = this._formbuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onFormSubmit() {
    if (this.loginForm.valid) this.value = true;

    // this._empService.loginMiddleware(this.id).subscribe({
    //   next: (res) => {
    //     // console.log(res);
    //     this._router.navigateByUrl('/employee-table-data');
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   },
    //   complete: () => {
    //     console.log('observable completed');
    //   },
    // });

    // if (this.value) {
    //   this._empService.setBoolean(this.value);
    //   this._router.navigateByUrl('/employee-table-data');
    // } else this._empService.userdata = false;
  }
}
