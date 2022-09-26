import { Component, OnInit } from '@angular/core';
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
  public collection!: Order[];

  constructor(private ordersService: OrdersService) {
    this.title = 'list of orders';
    // subscribe = appel asynchrone, donc le this.collection peut être undefined
    this.ordersService.collection$.subscribe((data) => {
      console.log(data);
      this.collection = data;
    });
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'title changed';
  }
}
