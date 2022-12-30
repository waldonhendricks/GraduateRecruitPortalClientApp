import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrUtility } from '../utility/toast.utility';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {
  resetPasswordForm;

  //resetPassword: ResetPassword ={
  //  newPassword: '',
  // confirmPassword: '',
  //};

  constructor(/*private resetPasswordService: ResetPasswordService,*/ /*private toast: ToastrUtility*/) {
    this.resetPasswordForm = new FormGroup({
      newPassword: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    }


    );

  }

  get newPassword() {
    return this.resetPasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPasword');
  }

  ngOnInit(): void {
  }

  submitResetPassword() {
    // if (this.resetPasswordForm.value.newPassword !== this.resetPasswordForm.value.confirmPassword) {
    //   this.toast.showtoastrError("Password do not match!", "Password Error");
    //   return;
    }

  }

//resetPassword(graduate: Graduate): void {
  //this.ResetPasswordService.register(graduate).subscribe({
  //  error: (error) => {
    //  this.toast.showtoastrError(error, "Request status");
   //   console.log(error);
   //   setTimeout(() => {
  //    }, 1500);
  //  },

  //  complete: () => this.toast.showtoastrSuccess("Save Request Successful.", "Request Status")
 // });
//}


