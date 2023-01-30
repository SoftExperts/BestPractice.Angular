import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountmoduleModule } from './accountmodule/accountmodule.module';
import { FeeComponent } from './accountmodule/fee/fee.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  // In declartions we declare the components
  declarations: [
    AppComponent,
    ContentComponentComponent,
    EmployeeComponent,
    FeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("constructor load App Modules!")
  }
}
