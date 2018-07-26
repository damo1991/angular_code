import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
  model= new Student();
  genders : any[] = ['Male', 'Female'];
  submitted : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {
    let stud = JSON.stringify(this.model);
    console.log(stud);
    this.submitted = true;
  }

}
