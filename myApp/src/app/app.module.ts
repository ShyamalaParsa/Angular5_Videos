import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
