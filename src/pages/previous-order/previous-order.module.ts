import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousOrderPage } from './previous-order';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    PreviousOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousOrderPage),
    HeaderComponentModule
  ],
})
export class PreviousOrderPageModule {}
