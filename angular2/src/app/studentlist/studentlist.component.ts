import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students: any[]; 
  constructor(private _router : Router){}
  public LoadStudents(filterText: string): void {  
      this.students = [  
          { studentID: 1, studentName: 'Steve', gender: 'Male', age: 35, course: 'MCA', DOB: '10/12/1982', grade:0.7500,rating:7.5123 },  
          { studentID: 2, studentName: 'Bobby', gender: 'Male', age: 32, course: 'MBA', DOB: '12/1/1985', grade: 0.7850, rating: 7.8223 },  
          { studentID: 3, studentName: 'Rina', gender: 'Female', age: 45, course: 'B.Tech', DOB: '9/11/1972', grade: 0.8525, rating: 8.5263 },  
          { studentID: 4, studentName: 'Alex', gender: 'Female', age: 24, course: 'M.Tech', DOB: '1/1/1993', grade: 0.5540, rating: 5.5123 },  
          { studentID: 5, studentName: 'Rahul', gender: 'Male', age: 26, course: 'MCA', DOB: '1/21/1991', grade: 0.9550, rating: 9.5534 },  
      ];  

      if (filterText != "") {  
          var filterStudentList: any[] = [];  
          this.students.forEach(stu => {  
              if (stu.studentName.toLowerCase().includes(filterText)) {  
                  filterStudentList.push(stu);  
              }  
          })  
          this.students = filterStudentList;  
      }  
  }  

  ngOnInit() {  
      this.LoadStudents("");  
  }  

  searchInList(searchTerm: string): void { 
      this.LoadStudents(searchTerm);  
  }  

  redirect(){
    this._router.navigate(['/Reactive']);
  }
}

