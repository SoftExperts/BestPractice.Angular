import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employee } from './employee';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  // In declartions we declare the components
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Employee],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("constructor load App Modules!")
  }
}
