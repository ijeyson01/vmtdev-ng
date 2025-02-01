import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styles: ``
})
export class TableButtonComponent {

  @Input()
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
