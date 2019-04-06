import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchUserToMessagePage } from './search-user-to-message';

@NgModule({
  declarations: [
    SearchUserToMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchUserToMessagePage),
  ],
})
export class SearchUserToMessagePageModule {}
