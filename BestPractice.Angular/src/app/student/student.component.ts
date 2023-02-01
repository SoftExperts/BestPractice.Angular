import { Component, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  encapsulation: ViewEncapsulation.None,
  // Step 2 ParentToChild:
  //  inputs: ['pData'],

  // Step 3: ChildToParent, 
  outputs: ['childEvent']
})
export class StudentComponent {
  // Step 3: ParentToChild
    //  pData:any;

// Step 2: ChildToParent , we make the custom event by using EventEmitter interface from core library.
  childEvent = new EventEmitter();

onChange(val:any){
 // by using emit method of the child event we will pass the value
  this.childEvent.emit(val);

}
}
