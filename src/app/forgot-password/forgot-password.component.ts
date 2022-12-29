import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent{

  resetPasswordFormGroup = new FormGroup(
  {
    email: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@mycput.ac\.za$'), Validators.email])
  });

  get email()
  {
    return this.resetPasswordFormGroup.get('email');
  }

  constructor()
  {
    
  }

  submitResetPassword(){}
}
