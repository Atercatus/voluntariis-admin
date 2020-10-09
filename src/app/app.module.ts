import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ViewWrapperComponent} from './components/view-wrapper/view-wrapper.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ViewWrapperComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
