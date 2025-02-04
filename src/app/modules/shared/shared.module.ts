import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableButtonComponent } from './table-button/table-button.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TableButtonComponent
  ]
})
export class SharedModule { }
