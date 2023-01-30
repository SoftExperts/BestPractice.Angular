import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeecomponentComponent } from './feecomponent/feecomponent.component';
import { FeeComponent } from './fee/fee.component';



@NgModule({
  declarations: [
    FeecomponentComponent,
    FeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountmoduleModule { }
