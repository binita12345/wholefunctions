import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsfeedDetailPage } from './newsfeed-detail';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    NewsfeedDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsfeedDetailPage),
    HeaderComponentModule
  ],
})
export class NewsfeedDetailPageModule {}
