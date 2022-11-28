import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from '../service/signup.service';
import { Graduate } from '../model/signup';
import { ToastrUtility } from '../utility/toast.utility';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl("")
  });

  graduate: Graduate = {
    email: '',
    password: '',
    confirmPassword: '',

  };

  constructor(private signUpService: SignupService, private toast: ToastrUtility) {
  }

  ngOnInit(): void {
  }

  submitRegistration() {
    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
      this.toast.showtoastrError("Password do not match!", "Password Error");
      return;
    }

    this.graduate.email = this.signUpForm.value.email!;
    this.graduate.password = this.signUpForm.value.password!;
    this.graduate.confirmPassword = this.signUpForm.value.confirmPassword!;
    this.signUp(this.graduate);
    setTimeout(() => {
    }, 1800);

  }

  signUp(graduate: Graduate): void {
    this.signUpService.register(graduate).subscribe({
      error: (error) => {
        this.toast.showtoastrError(error, "Request status");
        console.log(error);
        setTimeout(() => {
        }, 1500);
      },

      complete: () => this.toast.showtoastrSuccess("Save Request Successful.", "Request Status")
    });
  }

  // login(graduate: Graduate): void
  // {
  //   this.signUpService.login(graduate).subscribe(
  //   {
  //     error: (error) => this.toast.showtoastrError(error, "Request Status"),
  //     complete: () => this.toast.showtoastrSuccess("Signup Successful.", "Request Status")
  //   });

  //   setTimeout(() => {
  //     //window.location.reload();   
  //   }, 1500);
  // }
}

