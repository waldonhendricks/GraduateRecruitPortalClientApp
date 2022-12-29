import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrUtility } from '../utility/toast.utility';
import { GraduateProfileService } from '../service/graduate-profile.service';
import { Graduate } from '../model/graduate';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  passwordRegex: any = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';
  emailRegex: any = Validators.email;

  signUpForm = new FormGroup({
    primaryEmail: new FormControl("", [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@mycput.ac\.za$')]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]),
    confirmPassword: new FormControl("", [Validators.required])
  });

  confirmPassword: string = "";

  graduate: Graduate = {
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

  constructor(private graduateService: GraduateProfileService, private toast: ToastrUtility) {
  }

  ngOnInit(): void {
  }

  submitRegistration() {
    console.log("Submitting registration...please wait");

    // if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
    //   this.toast.showtoastrError("Password do not match!", "Password Error");
    //   return;

    // } else if (this.signUpForm.value.primaryEmail === "") {
    //   this.toast.showtoastrError("Email required", "Email Error");
    //   return;

    //   //this email validation does not work properly 
    // //  }else if(!this.signUpForm.value.primaryEmail?.match(this.emailRegex)){
    // //   this.toast.showtoastrError("Email must include '@'", "Invalid email");
    // //   return;

    // } else if (this.signUpForm.value.password === "" && (this.signUpForm.value.password?.length < 8)) {
    //   this.toast.showtoastrError("8+ Character password required", "Password error");
    //   return;

    // } else if (this.signUpForm.value.confirmPassword === "") {
    //   this.toast.showtoastrError("Confirmed password required", "Confirmed password error");
    //   return;

    //   //this password validation does not work properly
    //  } else if (!this.signUpForm.value.password?.match(this.passwordRegex)) {
    //   this.toast.showtoastrError("Password must contain a combination of lowercase, uppercase, digits, and special characters", "Weak password");
    //   return;
    // }
    this.graduate.primaryEmail = this.signUpForm.value.primaryEmail!;
    this.graduate.password = this.signUpForm.value.password!;
    this.confirmPassword = this.signUpForm.value.confirmPassword!;

    // Must check the password before you submit and if they do not match,
    // Report back to the user.
    this.signUp(this.graduate);
    setTimeout(() => {
    }, 1800);

  }

  signUp(graduate: Graduate): void {
    console.log("run");
    this.graduateService.saveProfile(graduate).subscribe({
      error: (error) => {
        this.toast.showtoastrError(error, "Request status");
        console.log(error);
        setTimeout(() => {
        }, 1500);
      },

      complete: () => this.toast.showtoastrSuccess("Save Request Successful.", "Request Status")
    });
  }

}

