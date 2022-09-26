import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public numVersion: BehaviorSubject<number>;

  constructor() {
    this.numVersion = new BehaviorSubject<number>(1);
  }

  public incrementVersion(): void {
    // .value permet de récupérer la valeur en dur de l'observable
    //console.log(this.numVersion.value + 1);
    this.numVersion.next(this.numVersion.value + 1);
  }
}
