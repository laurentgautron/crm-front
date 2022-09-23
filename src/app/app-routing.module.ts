import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './login/views/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/views/page-reset-password/page-reset-password.component';
import { PageSignUpComponent } from './login/views/page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },

  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },

  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },

  { path: 'sign-up', component: PageSignUpComponent },

  { path: 'reset', component: PageResetPasswordComponent },

  { path: 'forgot', component: PageForgotPasswordComponent },
];

@NgModule({
  // preloadingStrategy = charge les modules au démarrage
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
