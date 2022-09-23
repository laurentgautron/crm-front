import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  // on n'importe pas les modules ici mais dans le core
  // optimisation du code : un role pour un module
  // CoreModule avant ApproutingModule pour les imports de login
  imports: [BrowserModule, CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent], // pour démarrer l'application
})
export class AppModule {
  // acces aux imports et exports ( exports des modules importés: ici CoreModule)
  // le role d'appModule est de démarrer l'application avec les modules au démarrage
}
