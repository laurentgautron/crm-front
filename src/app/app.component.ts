import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title!: string | undefined; // on peut definir deux types pour une propriété
  // public title!: pour la valeur par defaut undefined
  // ou public title: string = 'crm'; si pas de constructeur
  private behave = new BehaviorSubject(0);

  constructor() {
    this.title = 'crm';
    this.behave.subscribe((data) => console.log(data));
    this.behave.next(1);
    this.behave.subscribe((data) => console.log(data));
    this.behave.next(2);
    this.behave.next(Math.random());
    this.behave.subscribe((data) => console.log(data));
    this.behave.subscribe((data) => console.log(data));
  }
}
