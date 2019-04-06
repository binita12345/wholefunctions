import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostnfoundPage } from './lostnfound';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    LostnfoundPage,
  ],
  imports: [
    IonicPageModule.forChild(LostnfoundPage),
    HeaderComponentModule
  ],
})
export class LostnfoundPageModule {}
