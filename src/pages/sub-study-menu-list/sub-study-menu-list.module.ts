import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubStudyMenuListPage } from './sub-study-menu-list';
import { HeaderComponentModule } from '../../components/header/header.module';
import { ProgressBarComponentModule } from '../../components/progress-bar/progress-bar.module';

@NgModule({
  declarations: [
    SubStudyMenuListPage,
  ],
  imports: [
    IonicPageModule.forChild(SubStudyMenuListPage),
    HeaderComponentModule,
    ProgressBarComponentModule
  ],
})
export class SubStudyMenuListPageModule {}
