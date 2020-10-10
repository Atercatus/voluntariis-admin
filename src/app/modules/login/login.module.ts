import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PwHomeComponent} from './pw-home.component';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  declarations: [PwHomeComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
