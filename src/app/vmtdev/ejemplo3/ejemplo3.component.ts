import { Component, ViewChild } from '@angular/core';
import { EjemploComponent } from '../ejemplo/ejemplo.component';
import { Ejemplo2Component } from '../ejemplo2/ejemplo2.component';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styles: ``
})
export class Ejemplo3Component {
  
  @ViewChild(EjemploComponent, { static: false }) elementoLogin!: EjemploComponent;
  
  @ViewChild(Ejemplo2Component, {static: false}) elementoRegistro!: Ejemplo2Component;
}
