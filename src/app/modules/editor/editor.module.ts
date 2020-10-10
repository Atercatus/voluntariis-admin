import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PwHomeComponent} from './pw-home.component';
import {EditorRoutingModule} from './editor-routing.module';

@NgModule({
  declarations: [PwHomeComponent],
  imports: [CommonModule, EditorRoutingModule],
})
export class EditorModule {}
