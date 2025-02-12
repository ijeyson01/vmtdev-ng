import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { DeviceComponent } from './device/device.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CrudRoutingModule } from './crud-routing.module';



@NgModule({
  declarations: [
    PersonComponent,
    DeviceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CrudRoutingModule
  ],
  exports: [
    PersonComponent,
    DeviceComponent
  ]
})
export class CrudModule { }
