import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UtilityComponent } from './utility/utility.component';
import { ComponentDevelopmentComponent } from './component-development/component-development.component';
import { GraduateProfileComponent } from './graduate-profile/graduate-profile.component';
import { DirectVacancyComponent } from './direct-vacancy/direct-vacancy.component';
import { MatNativeDateModule } from '@angular/material/core';
import { SigninComponent } from './signin/signin.component';
<<<<<<< HEAD
import { VacancyInformationComponent } from './vacancy-information/vacancy-information.component';
=======
import { ContactComponent } from './contact/contact.component';
>>>>>>> 47597040dba4d978dd396a844bf9b310d6f4d4ec

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    SignupComponent,
    ResetPasswordComponent,
    UtilityComponent,
    ComponentDevelopmentComponent,
    GraduateProfileComponent,
    DirectVacancyComponent,
    SigninComponent,
<<<<<<< HEAD
    VacancyInformationComponent
=======
    ContactComponent
>>>>>>> 47597040dba4d978dd396a844bf9b310d6f4d4ec
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
