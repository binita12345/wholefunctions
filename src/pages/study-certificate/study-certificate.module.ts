import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyCertificatePage } from './study-certificate';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    StudyCertificatePage,
  ],
  imports: [
    IonicPageModule.forChild(StudyCertificatePage),
    HeaderComponentModule
  ],
})
export class StudyCertificatePageModule {}
