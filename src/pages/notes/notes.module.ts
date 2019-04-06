import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesPage } from './notes';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    NotesPage,
  ],
  imports: [
    IonicPageModule.forChild(NotesPage),
    HeaderComponentModule
  ],
})
export class NotesPageModule {}
