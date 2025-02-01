import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { DeviceComponent } from './device/device.component';



@NgModule({
  declarations: [
    PersonComponent,
    DeviceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonComponent,
    DeviceComponent
  ]
})
export class CrudModule { }
