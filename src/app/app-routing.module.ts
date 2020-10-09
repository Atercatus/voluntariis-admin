import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {routePaths} from './constants/routes';
import {ViewWrapperComponent} from './components/view-wrapper/view-wrapper.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: routePaths.MAIN,
  },
  {
    path: '',
    component: ViewWrapperComponent,
    children: [
      {
        path: routePaths.MAIN,
        loadChildren: () => import('./modules/main/main.module').then(mod => mod.MainModule),
      },
      {
        path: routePaths.EDITOR,
        loadChildren: () => import('./modules/editor/editor.module').then(mod => mod.EditorModule),
      },
      {
        path: routePaths.CONTENTS,
        loadChildren: () => import('./modules/content-list/content-list.module').then(mod => mod.ContentListModule),
      },
      {
        path: routePaths.MEDIA,
        loadChildren: () => import('./modules/media/media.module').then(mod => mod.MediaModule),
      },
      {
        path: routePaths.LOGIN,
        loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule),
      },
      {
        path: routePaths.ERROR,
        loadChildren: () => import('./modules/error/error.module').then(mod => mod.ErrorModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: `${routePaths.ERROR}/404`,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
