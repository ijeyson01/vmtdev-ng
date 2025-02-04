import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { ButtonTableI } from '../../../interfaces/buttontable.interface';
import { PersonI } from '../../../interfaces/person.interface';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styles: ``
})
export class TableButtonComponent implements OnInit, AfterViewInit {
  
  firstNameLocal: string = '';
  lastNameLocal: string = '';
  phoneLocal: string = '';
  
  ngAfterViewInit(): void { // funcion similar a ngOnInit
    this.firstNameLocal = this.personData.firstname;
    this.lastNameLocal = this.personData.lastname;
    this.phoneLocal = this.personData.phone;
  }
  
  ngOnInit(): void {
    // this.firstNameLocal = this.personData.firstname;
    // this.lastNameLocal = this.personData.lastname;
    // this.phoneLocal = this.personData.phone;
  }

  

  @Input()
  buttonProperties: ButtonTableI = {
    labelUpdate: 'Update',
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

  @Input()
  personData: PersonI = {
        id: 0,
        firstname: '',
        lastname: '',
        fecha_nacimiento: '',
        genre: '',
        phone: '',
        ciudad: '',
        nivel_estudios: ''
  };

  /*@Input()
  labelUpdate: string = 'Update';

  @Input()
  labelDelete: string = 'Delete';

  @Input()
  labelAditional: string = 'Option';

  @Input()
  showUpdate: boolean = true;

  @Input()
  showDelete: boolean = true;

  @Input()
  showOption: boolean = false;

  @Input()
  styleButtonUpdate: string = 'primary';

  @Input()
  styleButtonDelete: string = 'danger';

  @Input()
  styleButtonOption: string = 'success'

  @Input()
  iconButtonUpdate: string = 'refresh';

  @Input()
  iconButtonDelete: string = 'trash';

  @Input()
  iconButtonAditional: string = 'plus';*/

  @Output() eventUpdate = new EventEmitter();

  @Output() eventDelete = new EventEmitter();

  @Output() eventOption = new EventEmitter();

  @Output() eventSave = new EventEmitter<PersonI>();

  clicEventUpdate() {
    this.eventUpdate.emit();
  }

  clicEventDelete() {
    this.eventDelete.emit();
  }

  clicEventOption() {
    this.eventOption.emit();
  }

  clicEventSave() {
    let personUpdate: PersonI = {
      firstname: this.firstNameLocal,
      lastname: this.lastNameLocal,
      phone: this.phoneLocal,
      ciudad: this.personData.ciudad,
      fecha_nacimiento: this.personData.fecha_nacimiento,
      genre: this.personData.genre,
      nivel_estudios: this.personData.nivel_estudios,
      id: this.personData.id
    }
    this.eventSave.emit(personUpdate);
  }
}
