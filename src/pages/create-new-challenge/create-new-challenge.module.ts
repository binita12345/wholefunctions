import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewChallengePage } from './create-new-challenge';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    CreateNewChallengePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewChallengePage),
    HeaderComponentModule
  ],
})
export class CreateNewChallengePageModule {}
