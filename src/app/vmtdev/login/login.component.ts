import { Component, EventEmitter, Output } from '@angular/core';
import { loginInterface } from '../../interfaces/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor( private router: Router ){}

  @Output() switchEvent = new EventEmitter<any>();

  placeholdercontrasenia: string = "Ingresa tu contraseña";

  userDefault: string = 'vmtdev@mail.com';
  passwordDefault: string = '123456.@';

  objetoLogin: loginInterface = {
    user: '',
    password: '',
    logged: false
  }

  loginProces() {
    if(this.objetoLogin.user.length < 8 || this.objetoLogin.password.length < 8) {
      alert('Los datos ingresados son incorrectos');
    } else {
      if(this.objetoLogin.user === this.userDefault && this.objetoLogin.password === this.passwordDefault) {
        this.router.navigate(['vmt-home', 'device']);
        localStorage.setItem('logged', 'true');
      } else {
        window.alert('Usuario o contraseña incorrectos');
      }
    }
    
  }

  clicEventEmitter() {
    this.switchEvent.emit();
  }
}
