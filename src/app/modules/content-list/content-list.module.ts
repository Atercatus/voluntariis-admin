import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PwHomeComponent} from './pw-home.component';
import {ContentListRoutingModule} from './content-list-routing.module';

@NgModule({
  declarations: [PwHomeComponent],
  imports: [CommonModule, ContentListRoutingModule],
})
export class ContentListModule {}
