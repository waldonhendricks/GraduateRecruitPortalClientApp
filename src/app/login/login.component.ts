import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Graduate } from '../model/graduate';
import { GraduateProfileService } from '../service/graduate-profile.service';
import { ToastrUtility } from '../utility/toast.utility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{

  user: Graduate = {
    preferredName: '',
    secondaryEmail: '',
    motorVehicleLicense: '',
    country: '',
    cv: {
      cvId: 0,
      documentLocation: "",
      isAcknowledged: false,
      dateAdded: new Date(Date.parse(Date.now().toLocaleString()))
    },
    qualifications: [],
    experiences: [],
    userId: 0,
    firstName: '',
    surname: '',
    email: '',
    password: '',
    cellphone: '',
    userRole: ''
  }

  loginFormGroup = new FormGroup(
  {
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  get email()
  {
    return this.loginFormGroup.get('email');
  }

  get password()
  {
    return this.loginFormGroup.get('password');
  }

  constructor (private cookieService: CookieService, 
    private graduateService: GraduateProfileService, private toast: ToastrUtility)
  {

  }

  login(graduate: Graduate): void {
    this.graduateService.login(graduate).subscribe({
      error: (errorResponse: any) => {
        this.toast.showtoastrError(errorResponse.error.error, "Request status");
        console.log(errorResponse.error.error);
        setTimeout(() => {
        }, 2000);
      },
      next: (response: any) => {
        console.log("Singin was called and it decided to keep quiet.");
        // This is just an assumption ne.
        if (response.sessionToken !== "") 
        {
          /**
           * Suppose our server responds and inside the response the Server
           * gave us a SessionId for the newly logged in user.
           * which is found inside of the response object.
           * 
           * response.sessionId = 898dega9sdf4q354421sf4g5s1a54d
           */
          // 898dega9sdf4q354421sf4g5s1a54d
          this.cookieService.set("GRAD_PORTAL_USER_SESSION-TOKEN", response.sessionToken);
          this.cookieService.set("GRAD_PORTAL_USER-ID", response.userId);
        }
      },
      complete: () => this.toast.showtoastrSuccess("Login Request Successful.", "Request Status")
    });

  }

  submitLoginForm() 
  {
    this.user.email = this.loginFormGroup.value.email!;
    this.user.password = this.loginFormGroup.value.password!;
    this.login(this.user);
  }
}
