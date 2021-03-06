import { Component, OnInit } from '@angular/core';
import { Data } from './data';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showdatalist',
  templateUrl: './showdatalist.component.html',
  styleUrls: ['./showdatalist.component.css']
})
export class ShowdatalistComponent implements OnInit {
  data : Data[];
  errorMessage : string;
  Error : boolean = false;
  constructor(private _dataService : DataService, private _router : Router ) { }

  ngOnInit() {
    this._dataService.getData()
        .subscribe((response) =>{
          if(response.id != undefined || response.id != ""){
            this.data = response;
          }
        },
      (error)=>{
        this.errorMessage = "Error in service, Please try later";
        this.Error = true;
      })
  }

  ShowDetails(id){
    this._dataService.getLoginState().subscribe(state => { console.log(state) });
    console.log(id)
    //this._router.navigate(['/ShowSingleData/'+id]);
  }
}
