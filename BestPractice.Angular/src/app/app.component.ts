import { Component, HostListener } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [Employee]
})
export class AppComponent {
  title = 'BestPractice.Angular';

  constructor(private _obj: Employee){
    _obj.display();
    _obj.show();
  }
}
