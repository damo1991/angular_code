import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Student } from '../templatedriven/student'

@Component({
  selector: 'app-studentsearch',
  templateUrl: './studentsearch.component.html',
  styleUrls: ['./studentsearch.component.css']
})
export class StudentsearchComponent implements OnInit {
  @Input() studentName : string;
  @Output() searchText : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  OnStudentSearch(value : string) {
    this.searchText.emit(value);
    
    console.log(this.studentName)
  }

}
