import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectablecomboComponent } from './selectablecombo/selectablecombo.component';
@NgModule({
  declarations: [
    AppComponent,
    SelectablecomboComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
