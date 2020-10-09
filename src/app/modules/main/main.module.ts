import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PwHomeComponent} from './pw-home.component';
import {MainRoutingModule} from './main-routing.module';

@NgModule({
  declarations: [PwHomeComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
