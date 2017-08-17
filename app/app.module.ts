import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FunAppComponent } from './app.component';

@NgModule({
  declarations: [
    FunAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FunAppComponent],
  exports: [FunAppComponent]
})
export class FunAppModule { }
