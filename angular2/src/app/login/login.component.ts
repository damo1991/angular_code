import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

import { AdressService } from '../address/adress.service';
import { LocalStorageHelper } from '../helper/localStorage';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  constructor(private fb : FormBuilder,
              private _address : AdressService,
              private _storage : LocalStorageHelper,
              private _route : Router
  ) {
      this.form = this.fb.group({
        'AccountNo' : ['',[Validators.required]],
        'Country':['',[Validators.required]],
        'Password':['',[Validators.required]]
      })
   }

  ngOnInit() {

  }

  onSubmit(value){
    this._address.validateUser(value)
        .subscribe((res)=>{
          if(res.IsSuccess)
          {
             this._storage.setUserAuthenticationToken(res.AccessToken);
              console.log(res);
              this._route.navigate(['./StudentList']);
          }
        })
  }

}
