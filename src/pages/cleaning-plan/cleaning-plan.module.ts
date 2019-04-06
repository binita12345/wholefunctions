import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleaningPlanPage } from './cleaning-plan';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    CleaningPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(CleaningPlanPage),
    HeaderComponentModule
  ],
})
export class CleaningPlanPageModule {}
