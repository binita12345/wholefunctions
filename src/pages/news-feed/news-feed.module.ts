import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsFeedPage } from './news-feed';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    NewsFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsFeedPage),
    HeaderComponentModule
  ],
})
export class NewsFeedPageModule {}
