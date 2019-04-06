import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintenancePage } from './maintenance';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    MaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(MaintenancePage),
    HeaderComponentModule
  ],
})
export class MaintenancePageModule {}
