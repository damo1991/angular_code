import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Data } from './data';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
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
    console.log(id)
    this._router.navigate(['/ShowSingleData/'+id]);
  }
}
