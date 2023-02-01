import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  encapsulation: ViewEncapsulation.None,
  inputs: ['pData']
})
export class StudentComponent {
pData:any;
}
