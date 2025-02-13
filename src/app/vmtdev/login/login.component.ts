import { Component, EventEmitter, Output } from '@angular/core';
import { loginInterface } from '../../interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  @Output() switchEvent = new EventEmitter<any>();

  placeholdercontrasenia: string = "Ingresa tu contraseña";

  objetoLogin: loginInterface = {
    user: '',
    password: '',
    logged: false
  }

  loginProces() {
    console.log(JSON.stringify(this.objetoLogin));
  }

  clicEventEmitter() {
    this.switchEvent.emit();
  }
}
