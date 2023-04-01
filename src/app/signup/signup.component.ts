import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrUtility } from '../utility/toast.utility';
import { GraduateProfileService } from '../service/graduate-profile.service';
import { Graduate } from '../model/graduate';
import { Router } from '@angular/router';

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
    surname: '',
    preferredName: '',
    email: '',
    secondaryEmail: '',
    motorVehicleLicense: '',
    country: '',
    password: '',
    cellphone: '',
    qualifications: [],
    experiences: [],
    userId: '',
    userRole: '',
    cv: {
      cvId: 0,
      documentLocation: "",
      isAcknowledged: false,
      dateAdded: new Date(Date.parse(Date.now().toLocaleString()))
    }
  };

  constructor(private route: Router, private graduateService: GraduateProfileService, private toast: ToastrUtility) {
  }

  ngOnInit(): void {
  }

  submitRegistration(): void {
    console.log("Submitting registration...please wait");

    this.graduate.email = this.signUpForm.value.primaryEmail!;
    this.graduate.password = this.signUpForm.value.password!;
    this.confirmPassword = this.signUpForm.value.confirmPassword!;

    // Must check the password before you submit and if they do not match,
    // Report back to the user.
    if(this.graduate.password !== this.confirmPassword) {
      this.toast.showtoastrError('Password do not match', "Password Mismatch Error")
      return;
    }

    this.signUp(this.graduate);
    setTimeout(() => {
    }, 1800);

  }

  signUp(graduate: Graduate): void {
    console.log("run");
    this.graduateService.signup(graduate).subscribe({
      next: (response) => {
        this.route.navigate(['/login'], {queryParams: {signupSuccess: true,}});
      },
      error: (errorResponse: any) => {
        this.toast.showtoastrError(errorResponse.error.error, "Request status");
        setTimeout(() => {
        }, 1500);
      },
    });
  }

}

