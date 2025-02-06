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

  newDeviceName: string = '';
  newDeviceQuantity: number = 0;
  newDevicePrice: number = 0;

  deviceList: DeviceI[] = [
    {
      id: 1,
      name: 'Samsung S25 Ultra',
      quantity: 50,
      price: 100.5891
    },
    {
      id: 2,
      name: 'Xiami Note 9 pro',
      quantity: 150,
      price: 80
    },
    {
      id: 3,
      name: 'Redmi Note 14 pro',
      quantity: 120,
      price: 140
    }
  ]

  updateTable(deviceUpdate: DeviceI) {
    let findDevice = this.deviceList.find( device => device.id === deviceUpdate.id );

    if (findDevice) {
      let devicePosition = this.deviceList.indexOf(findDevice);
      this.deviceList.splice(devicePosition, 1);
      this.deviceList.push(deviceUpdate);
      // ordernar de manera ascendente por id
      this.deviceList.sort( (device1, device2) => device1.id - device2.id)
    }

  }
  
  addNewDevice () {
    // ordernar de manera descendente por id
    let deviceListDesc = this.deviceList;
    deviceListDesc.sort((device1, device2) => device2.id - device1.id)
    let lastDeviceId: number = deviceListDesc[0].id + 1;
    let newDevice: DeviceI = {
      id: lastDeviceId,
      name: this.newDeviceName,
      quantity: this.newDeviceQuantity,
      price: this.newDevicePrice
    }
    this.deviceList.push(newDevice);
  }
}
