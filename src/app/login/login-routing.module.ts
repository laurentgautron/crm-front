import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './views/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './views/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './views/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './views/page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'reset', component: PageResetPasswordComponent },
  { path: 'forgot', component: PageForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
