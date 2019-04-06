import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateMessagePage } from './private-message';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    PrivateMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateMessagePage),
    HeaderComponentModule
  ],
})
export class PrivateMessagePageModule {}
