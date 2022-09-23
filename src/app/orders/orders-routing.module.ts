import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from '../clients/views/page-add-client/page-add-client.component';
import { PageEditClientComponent } from '../clients/views/page-edit-client/page-edit-client.component';
import { PageListOrdersComponent } from './views/page-list-orders/page-list-orders.component';

const routes: Routes = [
  { path: '', component: PageListOrdersComponent },
  { path: 'add', component: PageAddClientComponent },
  { path: 'edit', component: PageEditClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
