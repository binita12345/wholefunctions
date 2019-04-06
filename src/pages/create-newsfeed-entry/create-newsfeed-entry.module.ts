import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewsfeedEntryPage } from './create-newsfeed-entry';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    CreateNewsfeedEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewsfeedEntryPage),
    HeaderComponentModule
  ],
})
export class CreateNewsfeedEntryPageModule {}
