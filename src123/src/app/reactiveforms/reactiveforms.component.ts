import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators  } from '@angular/forms';
import { Student } from '../templatedriven/student';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  form : FormGroup;
  model = new Student();
  genders : any[] = ['Male', 'Female'];
  submitted : boolean = false;
  constructor(private fb : FormBuilder) {
      this.form = this.fb.group({
        'studentID' : ['',[Validators.required]],
        'studentName' : ['',[Validators.required, Validators.minLength(6)]],
        'gender' : ['',[Validators.required]]
      })
   }

  ngOnInit() {
  }

  onSubmit(value){
    this.submitted = true;
    this.model = value;
    console.log(value);
  }

}
