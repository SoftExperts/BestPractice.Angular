import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent {
 //Step 5: ChildToParent
 childData: any;
  GetData(val:any){
    this.childData = val;
  }
}
