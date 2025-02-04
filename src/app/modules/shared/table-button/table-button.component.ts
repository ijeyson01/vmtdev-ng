import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { ButtonTableI } from '../../../interfaces/buttontable.interface';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styles: ``
})
export class TableButtonComponent {

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

  clicEventUpdate() {
    this.eventUpdate.emit();
  }

  clicEventDelete() {
    this.eventDelete.emit();
  }

  clicEventOption() {
    this.eventOption.emit();
  }

}
