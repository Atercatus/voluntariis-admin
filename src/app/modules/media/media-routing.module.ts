import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PwHomeComponent} from './pw-home.component';

const routes: Routes = [{path: '', component: PwHomeComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaRoutingModule {}
