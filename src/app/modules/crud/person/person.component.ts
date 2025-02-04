import { Component } from '@angular/core';
import { personDS } from '../../../datasource/person.datasource';
import { ButtonTableI } from '../../../interfaces/buttontable.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: ``
})
export class PersonComponent {

  dataPerson: any[] = personDS;

  buttonProperties: ButtonTableI = {
      labelUpdate: 'Actualizar',
      labelDelete: 'Delete',
      labelAditional: 'Option',
      styleButtonUpdate: 'primary',
      styleButtonDelete: 'danger',
      styleButtonAditional: 'success',
      showUpdate: true,
      showDelete: true,
      showOption: false,
      iconButtonUpdate: 'refresh',
      iconButtonDelete: 'trash',
      iconButtonAditional: 'plus'
    }
}
