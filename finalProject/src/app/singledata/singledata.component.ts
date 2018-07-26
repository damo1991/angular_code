import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleDataService } from './singleData.service';
import { Data } from '../showdata/data';

@Component({
  selector: 'app-singledata',
  templateUrl: './singledata.component.html',
  styleUrls: ['./singledata.component.css']
})
export class SingledataComponent implements OnInit {
  data = new Data();
  errorMessage : string;
  Error : boolean = false;
  constructor(private _activatedRoute: ActivatedRoute, private _singleData: SingleDataService) { }

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params['id'];
    this._singleData.getSingleData(id)
      .subscribe((response) => {
        if (response.id != undefined || response.id != "") {
          this.data = response;
        }
      },
        (error) => {
          this.errorMessage = "Error in service, Please try later";
          this.Error = true;
        })
  }

}
