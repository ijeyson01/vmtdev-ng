import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupI } from '../../interfaces/signup.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class SignupComponent {

  @Output() switchEvent = new EventEmitter<any>();

  firstInputpassword: string = '';
  confirmInputpassword: string = '';
  
  signupobject: SignupI = {
    firstname: '',
    lastname: '',
    email: '',
    birthdate: '',
    password: ''
  }

  clicEventEmitter () {
    this.switchEvent.emit();
  }
}
