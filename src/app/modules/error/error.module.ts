import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PwHomeComponent} from './pw-home.component';
import {ErrorRoutingModule} from './error-routing.module';

@NgModule({
  declarations: [PwHomeComponent],
  imports: [CommonModule, ErrorRoutingModule],
})
export class ErrorModule {}
