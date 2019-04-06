import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyTestsPage } from './study-tests';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    StudyTestsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyTestsPage),
    HeaderComponentModule
  ],
})
export class StudyTestsPageModule {}
