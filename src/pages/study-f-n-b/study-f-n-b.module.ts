import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyFNBPage } from './study-f-n-b';
import { HeaderComponentModule } from '../../components/header/header.module';
import { ProgressBarComponentModule } from '../../components/progress-bar/progress-bar.module';

@NgModule({
  declarations: [
    StudyFNBPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyFNBPage),
    HeaderComponentModule,
    ProgressBarComponentModule
  ],
})
export class StudyFNBPageModule {}
