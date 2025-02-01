import { Component } from '@angular/core';
import { personDS } from '../../../datasource/person.datasource';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: ``
})
export class PersonComponent {

  dataPerson: any[] = personDS;
}
