import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title!: string | undefined; // on peut definir deux types pour une propriété
  // public title!: pour la valeur par defaut undefined
  // ou public title: string = 'crm'; si pas de constructeur

  constructor() {
    this.title = 'crm';
  }
}
