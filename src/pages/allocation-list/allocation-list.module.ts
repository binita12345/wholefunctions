import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllocationListPage } from './allocation-list';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    AllocationListPage,
  ],
  imports: [
    IonicPageModule.forChild(AllocationListPage),
    HeaderComponentModule
  ],
})
export class AllocationListPageModule {}
