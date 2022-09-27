import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // on parle de proprétés dans un langage objet, sinon ce sont des varialbles
  public title: string;
  public headers: string[];
  public collection$: Observable<Order[]>;
  public states: string[];

  constructor(private ordersService: OrdersService) {
    this.title = 'list of orders';
    this.collection$ = this.ordersService.collection$;
    this.states = Object.values(StateOrder);
    this.headers = [
      'Type',
      'Client',
      'Durée',
      'tjmHT',
      'total HT',
      'total TTC',
      'Etat',
    ];
    // subscribe = appel asynchrone, donc le this.collection peut être undefined
    // this.ordersService.collection$.subscribe((data) => {
    //   console.log(data);
    //   this.collection = data;
    // });
    // ces lignes sont remplacées par this.collection = this.orderService.collection$
    // : on souscrit dans le html avec le pipe async qui dessouscrit automatiquement
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'title changed';
  }

  public changeState(item: Order, event: any) {
    const state = event.target.value;
    this.ordersService.changeState(item, state).subscribe((data) => {
      // on change les valeurs du item qui sont à changer: Object.assign = bonne copie
      Object.assign(item, data);
    });
  }

  // en typescript il n'y a que des number, pas de float, double, ...
  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('totalCall');
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }
}
