import { Component } from '@angular/core';

@Component({
  // By using class
  //selector: '.app-content-component',

  // by using attribute
  // selector: '[app-content-component]',

  // by using element: this is the best technique, recomended by Angular Team
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css'],
  preserveWhitespaces: true,
})
export class ContentComponentComponent {

}
