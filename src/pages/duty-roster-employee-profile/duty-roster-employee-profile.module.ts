import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DutyRosterEmployeeProfilePage } from './duty-roster-employee-profile';

@NgModule({
  declarations: [
    DutyRosterEmployeeProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(DutyRosterEmployeeProfilePage),
  ],
})
export class DutyRosterEmployeeProfilePageModule {}
