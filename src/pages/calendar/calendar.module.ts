import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
    HeaderComponentModule
  ],
})
export class CalendarPageModule {}
