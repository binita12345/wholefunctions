import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequisitionPage } from './requisition';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    RequisitionPage,
  ],
  imports: [
    IonicPageModule.forChild(RequisitionPage),
    HeaderComponentModule
  ],
})
export class RequisitionPageModule {}
