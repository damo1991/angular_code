import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { LoginService } from '../login/login.service';
import { LocalStorageHelper } from '../helper/localStorageHelper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  errorMessage : string;
  constructor(private _fb : FormBuilder,
              private _router : Router,
              private _login : LoginService,
              private _localStorage : LocalStorageHelper) {
    this.form = this._fb.group({
      'email' : ['',[Validators.required]],
      'password' : ['',[Validators.required]]
    })
   }

  ngOnInit() {
  }

  onSubmit(data){
    this._login.login(data)
        .subscribe((response) => {
          if(response.token != undefined){
              this._localStorage.setUserAuthenticationToken(response.token);
              this._router.navigate(['/ShowData']);
          }
        },
        (error) => {
            this.errorMessage = "Error is service, Please try later."
        })
  }
}
