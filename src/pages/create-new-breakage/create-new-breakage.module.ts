import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewBreakagePage } from './create-new-breakage';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    CreateNewBreakagePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewBreakagePage),
    HeaderComponentModule
  ],
})
export class CreateNewBreakagePageModule {}
