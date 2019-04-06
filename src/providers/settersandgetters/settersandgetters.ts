import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SettersandgettersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettersandgettersProvider {

  constructor() {
    console.log('Hello SettersandgettersProvider Provider');
  }

  email: any;

  set Email(val: any){
    this.email = val;
  }

  get Email(): any {
    return this.email;
  }


}
