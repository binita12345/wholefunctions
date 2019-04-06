import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderListModalPage } from './order-list-modal';

@NgModule({
  declarations: [
    OrderListModalPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderListModalPage),
  ],
})
export class OrderListModalPageModule {}
