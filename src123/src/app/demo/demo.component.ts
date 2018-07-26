import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent {
  value1 : number;
  value2 : number;
  value3 : number;
  titleClass : string = "red-title";
  titleClasses={
    'red-title':true,
    'large-title':false
  }
  titleStyle = "red"
  constructor() {
    
   }

  onclick() : void
  {
    var value4 = this.value1 + this.value2;
  }

}
