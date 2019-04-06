import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewPrivateMessagePage } from './create-new-private-message';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    CreateNewPrivateMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewPrivateMessagePage),
    HeaderComponentModule
  ],
})
export class CreateNewPrivateMessagePageModule {}
