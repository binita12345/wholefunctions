import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FAndBPage } from './f-and-b';
import { HeaderComponentModule } from '../../components/header/header.module';
import { Ionic2RatingModule } from "ionic2-rating";

@NgModule({
  declarations: [
    FAndBPage,
  ],
  imports: [
    IonicPageModule.forChild(FAndBPage),
    HeaderComponentModule,
    Ionic2RatingModule
  ],
})
export class FAndBPageModule {}
