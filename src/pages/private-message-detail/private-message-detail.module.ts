import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateMessageDetailPage } from './private-message-detail';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    PrivateMessageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateMessageDetailPage),
    HeaderComponentModule
  ],
})
export class PrivateMessageDetailPageModule {}
