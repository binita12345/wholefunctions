import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewMaintenancePage } from './create-new-maintenance';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    CreateNewMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewMaintenancePage),
    HeaderComponentModule
  ],
})
export class CreateNewMaintenancePageModule {}
