import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  // on n'importe pas les modules ici mais dans le core
  // optimisation du code : un role pour un module
  // CoreModule avant ApproutingModule pour les imports de login
  imports: [BrowserModule, CoreModule, AppRoutingModule, HttpClientModule],
  // pour mettre par défaut dans tous les pipes currency de l'application
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent], // pour démarrer l'application
})
export class AppModule {
  // acces aux imports et exports ( exports des modules importés: ici CoreModule)
  // le role d'appModule est de démarrer l'application avec les modules au démarrage
}
