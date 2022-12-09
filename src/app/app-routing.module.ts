import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDevelopmentComponent } from './component-development/component-development.component';
import { GraduateProfileComponent } from './graduate-profile/graduate-profile.component';
import { DirectVacancyComponent } from './direct-vacancy/direct-vacancy.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { VacancyInformationComponent } from './vacancy-information/vacancy-information.component';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { VacancyAdsComponent } from './vacancy-ads/vacancy-ads.component';
import { VacancyPostComponent } from './vacancy-post/vacancy-post.component';
import { CompanyRecruitmentListComponent } from './company-recruitment-list/company-recruitment-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'component-development', component: ComponentDevelopmentComponent },
  { path: 'graduate-profile', component: GraduateProfileComponent },
  { path: 'direct-vacancy', component: DirectVacancyComponent },
  { path: 'vacancy-information', component: VacancyInformationComponent },
  { path: 'login', component: SigninComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'vacancy-ad', component: VacancyAdsComponent },
  {path: 'vacancy-post', component: VacancyPostComponent}
  { path: 'candidates-list', component: CompanyRecruitmentListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomepageComponent, 
  SignupComponent, 
  ResetPasswordComponent, 
  ForgotPasswordComponent, 
  ComponentDevelopmentComponent, 
  GraduateProfileComponent, 
  DirectVacancyComponent, 
  ForgotPasswordComponent, 
  ContactComponent,
  VacancyAdsComponent,,
  VacancyPostComponent
  CompanyRecruitmentListComponent,
];


