import { Component, ViewChild } from '@angular/core';
import { DeviceI } from '../../../interfaces/device.interface';
import { Modal } from 'bootstrap';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styles: ``
})
export class DeviceComponent {

  @ViewChild(Modal, {static: true}) deviceModal!: Modal;

  deviceList: DeviceI[] = [
    {
      id: 1,
      name: 'Samsung S25 Ultra',
      quantity: 50
    },
    {
      id: 2,
      name: 'Xiami Note 9 pro',
      quantity: 150
    },
    {
      id: 3,
      name: 'Redmi Note 14 pro',
      quantity: 120
    }
  ]

  updateTable(deviceUpdate: DeviceI) {
    let findDevice = this.deviceList.find( device => device.id === deviceUpdate.id );

    if (findDevice) {
      let devicePosition = this.deviceList.indexOf(findDevice);
      this.deviceList.splice(devicePosition, 1);
      this.deviceList.push(deviceUpdate);
      this.deviceList.sort( (device1, device2) => device1.id - device2.id)
    }

  }
}
