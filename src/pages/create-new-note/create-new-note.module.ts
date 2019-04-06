import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewNotePage } from './create-new-note';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    CreateNewNotePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewNotePage),
    HeaderComponentModule
  ],
})
export class CreateNewNotePageModule {}
