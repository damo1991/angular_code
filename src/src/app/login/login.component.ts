import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { LoginService } from './login.service';
import { LocalStorageHelper } from '../helper/localStorageHelper';
import { ADD_TOKEN } from '../store/actions/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  constructor(private _fb: FormBuilder,
    private _router : Router,
    private _login: LoginService,
    private _localStorage: LocalStorageHelper) {
    this.form = this._fb.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit(data) {
    this._login.login(data)
      .subscribe((response) => {
        console.log(response)
        if (response.token != undefined) {
          this._login.addLoginToken({
            action: ADD_TOKEN,
            payload: response.token
          })
          this._localStorage.setUserAuthenticationToken(response.token);
          this._router.navigate(['/DataList']);
        }
      },
        (error) => {
          this.errorMessage = "Error is service, Please try later."
        })
  }
}
