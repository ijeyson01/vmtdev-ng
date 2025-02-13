import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styles: ``
})
export class Ejemplo3Component {

  showLogin: boolean = true;
  
  @ViewChild('login') 
  elementoLogin!: LoginComponent;
  
  @ViewChild('signup') elementoRegistro!: SignupComponent;

  switchAuthProcess () {
    if(this.showLogin){
      this.showLogin = false;
    } else {
      this.showLogin = true;
    }
  }

}
