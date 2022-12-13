import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResetPassword } from '../model/reset-password';
import { ToastrUtility } from '../utility/toast.utility';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{
resetPasswordForm = new FormGroup ({
  newPassword : new FormControl (""),
  confirmPassword : new FormControl("")
}


);

resetPassword: ResetPassword ={
  newPassword: '',
  confirmPassword: '',
};

//constructor(private resetPasswordService: ResetPasswordService, private toast: ToastrUtility) {
//}

ngOnInit(): void {
}

//submitResetPassword() {
 // if (this.resetPasswordForm.value.newPassword !== this.resetPasswordForm.value.confirmPassword) {
 //   this.toast.showtoastrError("Password do not match!", "Password Error");
 //   return;
 // }
  

 // this.reset-password.newPassword = this.resetPasswordForm.value.newPassword!;
 // this.reset-password.confirmPassword = this.resetPasswordForm.value.confirmPassword!;
 // this.reset-password(this.reset-password);
 // setTimeout(() => {
  //}, 1800);

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


 