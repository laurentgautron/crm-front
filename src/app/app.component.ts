import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string | undefined; // on peut definir deus types pour une propriété
  // ou public title: string = 'crm'; si pas de constructeur

  constructor() {
    this.title = 'crm';
  }
}
