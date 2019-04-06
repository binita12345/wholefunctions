import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyDetailPage } from './study-detail';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    StudyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyDetailPage),
    HeaderComponentModule
  ],
})
export class StudyDetailPageModule {}
