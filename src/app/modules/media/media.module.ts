import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PwHomeComponent} from './pw-home.component';
import {MediaRoutingModule} from './media-routing.module';

@NgModule({
  declarations: [PwHomeComponent],
  imports: [CommonModule, MediaRoutingModule],
})
export class MediaModule {}
