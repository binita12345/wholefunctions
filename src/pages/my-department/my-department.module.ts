import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDepartmentPage } from './my-department';
import { HeaderComponentModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    MyDepartmentPage,
  ],
  imports: [
    IonicPageModule.forChild(MyDepartmentPage),
    HeaderComponentModule
  ],
})
export class MyDepartmentPageModule {}
