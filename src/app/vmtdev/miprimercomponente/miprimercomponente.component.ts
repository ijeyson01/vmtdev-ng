import { Component } from '@angular/core';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html',
  styleUrl: './miprimercomponente.component.css'
})
export class MiprimercomponenteComponent {

  nombre: string = '';

  clic (){
    alert(`El valor del nombre es: ${ this.nombre }`)
  }

  mouseMoveEvent(){
    console.log('El mouse pasó por aquí');
  }

  imprimirValor(){
    console.log(`La variable: ${this.nombre}`);
  }

}
