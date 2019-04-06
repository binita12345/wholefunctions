import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewLostNFoundPage } from './create-new-lost-n-found';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    CreateNewLostNFoundPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewLostNFoundPage),
    HeaderComponentModule
  ],
})
export class CreateNewLostNFoundPageModule {}
