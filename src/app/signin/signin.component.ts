import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { GraduateProfile } from '../model/graduate';
import { GraduateProfileService } from '../service/graduate-profile.service';
import { ToastrUtility } from '../utility/toast.utility';
import { SigninService } from '../service/signin-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm = new FormGroup({
    email: new FormGroup("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormGroup("", [Validators.required])
  });

  getEmail() {
    return this.signInForm.get('email');

  }

  getPassword() {
    return this.signInForm.get('password');
  }

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
    cellphone: '',
    graduateAdditionalFiles: [],
    Qualifications: [],
    Experiences: [],
    GraduatePortalDocument: [],
    userId: 0,
    email: '',
    userRole: ''
  };
  email: any;
  password: any;

  ngOnInit(): void {

  }

  constructor(private cookieService: CookieService, private signInService: SigninService, private graduateService: GraduateProfileService, private toast: ToastrUtility) {
  }

  login() {
    console.log("i must validate")
    if (this.signInForm.value.email === "" || this.signInForm.value.password === "") {
      this.toast.showtoastrError("Please complete all fields", "Empty fields error");
      return;

    }

    this.graduateLogin.email = this.signInForm.value.email!;
    this.graduateLogin.password = this.signInForm.value.password!;
    console.log(this.graduateLogin);
    this.signIn(this.graduateLogin);
    setTimeout(() => {
    }, 2000);
  }

  signIn(graduate: GraduateProfile): void {
    this.graduateService.saveProfile(graduate).subscribe({
      error: (error: string) => {
        this.toast.showtoastrError(error, "Request status");
        console.log(error);
        setTimeout(() => {
        }, 2000);
      },
      next: (response: any) => {
        console.log("Singin was called and it decided to keep quiet.");
        // This is just an assumption ne.
        if (response.successMessage === "Login Request Successful") {
          /**
           * Suppose our server responds and inside the response the Server
           * gave us a SessionId for the newly logged in user.
           * which is found inside of the response object.
           * 
           * response.sessionId = 898dega9sdf4q354421sf4g5s1a54d
           */
          // 898dega9sdf4q354421sf4g5s1a54d
          this.cookieService.set("USER_SESSION", "898dega9sdf4q354421sf4g5s1a54d");
        }
      },
      complete: () => this.toast.showtoastrSuccess("Login Request Successful.", "Request Status")
    });

  }
}

