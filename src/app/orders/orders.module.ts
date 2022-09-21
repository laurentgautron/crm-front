import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './views/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './views/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './views/page-edit-order/page-edit-order.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
