import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearningPlatformPage } from './learning-platform';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    LearningPlatformPage,
  ],
  imports: [
    IonicPageModule.forChild(LearningPlatformPage),
    HeaderComponentModule
  ],
})
export class LearningPlatformPageModule {}
