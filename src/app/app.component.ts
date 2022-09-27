import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public title!: string | undefined; // on peut definir deux types pour une propriété
  // public title!: pour la valeur par defaut undefined
  // ou public title: string = 'crm'; si pas de constructeur
  private obs: Observable<any>;
  private sub: Subscription;

  constructor() {
    this.title = 'crm';
    this.obs = new Observable((listX) => {
      listX.next('toto');
    });
    this.sub = this.obs.subscribe((data) => console.log(data));
  }
  ngOnDestroy(): void {
    // dessouscription pour ne pas avoir de fuite mémoire
    this.sub.unsubscribe();
  }
}
