import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewCalendarEventPage } from './create-new-calendar-event';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    CreateNewCalendarEventPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewCalendarEventPage),
    HeaderComponentModule
  ],
})
export class CreateNewCalendarEventPageModule {}
