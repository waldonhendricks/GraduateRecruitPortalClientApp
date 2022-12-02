import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDevelopmentComponent } from './component-development/component-development.component';
import { GraduateProfileComponent } from './graduate-profile/graduate-profile.component';
import { DirectVacancyComponent } from './direct-vacancy/direct-vacancy.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
<<<<<<< HEAD
import { VacancyInformationComponent } from './vacancy-information/vacancy-information.component';
=======
import { SigninComponent } from './signin/signin.component';

>>>>>>> 47597040dba4d978dd396a844bf9b310d6f4d4ec

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'component-development', component: ComponentDevelopmentComponent },
  { path: 'graduate-profile', component: GraduateProfileComponent },
  { path: 'direct-vacancy', component: DirectVacancyComponent },
<<<<<<< HEAD
  { path: 'vacancy-information', component: VacancyInformationComponent },
=======
  { path: 'login', component: SigninComponent },
>>>>>>> 47597040dba4d978dd396a844bf9b310d6f4d4ec
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
export const routingComponents = [HomepageComponent, SignupComponent, ResetPasswordComponent, ComponentDevelopmentComponent, GraduateProfileComponent,DirectVacancyComponent, VacancyInformationComponent];
=======
export const routingComponents = [HomepageComponent, SignupComponent, ResetPasswordComponent, ForgotPasswordComponent, ComponentDevelopmentComponent, GraduateProfileComponent, DirectVacancyComponent];
>>>>>>> 47597040dba4d978dd396a844bf9b310d6f4d4ec


