import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-crud-button',
  templateUrl: './crud-button.component.html',
  styles: ``
})
export class CrudButtonComponent {

  // atributos - parametros de entrada de 
  // personalizacion del componente

  // color del boton
  @Input()
  styleButton: string = 'secondary'; // valor por default: secondary (gris)

  // icono del boton
  @Input()
  iconButton: string = 'edit'; // valor por default: edit (lapiz)

  // texto del boton
  @Input()
  labelButton: string = 'Actualizar'; // valor por default: Actualizar

  // atributos - parametros de configuracion
  // del componentes
  
  // estatus del boton (desactivado)
  @Input()
  disabled: boolean = false;

  // mostrar boton
  @Input()
  showButton: boolean = true;

  // EVENTOS DE SALIDA

  @Output() clickEvent = new EventEmitter();

  clickEventUpdate() {
    this.clickEvent.emit();
  }

}
