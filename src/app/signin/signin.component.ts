import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GraduateProfile } from '../model/graduate';
import { Graduate } from '../model/signup';
import { GraduateProfileService } from '../service/graduate-profile.service';
import { ToastrUtility } from '../utility/toast.utility';
import { SigninService } from '../service/signin-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm = new FormGroup({
    email: new FormGroup(""),
    password: new FormGroup("")
  });

  graduateLogin: GraduateProfile = {
    firstName: '',
    middleName: '',
    lastName: '',
    preferredName: '',
    primaryEmail: '',
    secondaryEmail: '',
    gender: '',
    license: false,
    country: '',
    studyPermit: false,
    password: '',
    confirmPassword: '',
    cellphone: '',
    graduateAdditionalFiles: []
  };


  ngOnInit(): void {
  }

  constructor(private signInService: SigninService, private graduate: GraduateProfileService, private toast: ToastrUtility) {
  }

  login() {
    if (this.signInForm.value.email === " " || this.signInForm.value.password === " ") {
      this.toast.showtoastrError("Please complete all fields", "Empty fields error");
      return;

    }

    this.graduateLogin.primaryEmail = this.signInForm.value.email!;
    this.graduateLogin.password = this.signInForm.value.password!;
    this.signIn(this.graduateLogin);
    setTimeout(() => {
    }, 1800);
  }

  signIn(graduate: GraduateProfile): void {
    //   this.signInService.login(graduate).subscribe({
    //     error: (error: string) => {
    //       this.toast.showtoastrError(error, "Request status");
    //       console.log(error);
    //       setTimeout(() => {
    //       }, 1500);
    //     },
    //     complete: () => this.toast.showtoastrSuccess("Login Request Successful.", "Request Status")
    //   });

    // }
  }
  }
