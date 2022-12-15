import { NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
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
import { VacancyInformationComponent } from './vacancy-information/vacancy-information.component';
import { ContactComponent } from './contact/contact.component';
import { VacancyAdsComponent } from './vacancy-ads/vacancy-ads.component';
import { RecruitmentAdminNavbarComponent } from './recruitment-admin-navbar/recruitment-admin-navbar.component';
import { VacancyPostComponent } from './vacancy-post/vacancy-post.component';
import { CompanyDepartmentsListComponent } from "./company-departments-list/company-departments-list.component";
import { CompanyHomepageComponent } from './company-homepage/company-homepage.component';
import { RecruitmentListComponent } from './recruitment-list/recruitment-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GraduateInformationComponent } from './graduate-information/graduate-information.component';


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
    VacancyInformationComponent,
    ContactComponent,
    VacancyAdsComponent,
    RecruitmentAdminNavbarComponent,
    VacancyPostComponent,
    CompanyDepartmentsListComponent,
    CompanyHomepageComponent,
    GraduateInformationComponent,
    ForgotPasswordComponent,
    RecruitmentListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
