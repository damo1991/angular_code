import { Component, OnInit } from '@angular/core';
import { AdressService } from './adress.service';
import { Address } from './address'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  model = new Address();
  constructor(private _address : AdressService) { }

  ngOnInit() {
    this._address.getAddress()
        .subscribe((res) => {
          this.model = res[0].address;
          console.log(this.model);
        },
      (error) => {
        console.log("Error in services, try later.")
        console.log(error)
      })
  }

}
