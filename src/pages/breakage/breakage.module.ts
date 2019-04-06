import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreakagePage } from './breakage';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    BreakagePage,
  ],
  imports: [
    IonicPageModule.forChild(BreakagePage),
    HeaderComponentModule
  ],
})
export class BreakagePageModule {}
