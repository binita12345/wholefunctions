import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestPreferencesPage } from './guest-preferences';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    GuestPreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestPreferencesPage),
    HeaderComponentModule
  ],
})
export class GuestPreferencesPageModule {}
