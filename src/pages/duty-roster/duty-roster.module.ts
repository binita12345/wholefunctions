import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DutyRosterPage } from './duty-roster';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    DutyRosterPage,
  ],
  imports: [
    IonicPageModule.forChild(DutyRosterPage),
    HeaderComponentModule
  ],
})
export class DutyRosterPageModule {}
