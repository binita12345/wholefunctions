import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewWishesPage } from './create-new-wishes';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    CreateNewWishesPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewWishesPage),
    HeaderComponentModule
  ],
})
export class CreateNewWishesPageModule {}
