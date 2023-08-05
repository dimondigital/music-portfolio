import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: "full"
  },
  {
    path: 'intro',
    loadChildren: () => import('./page-intro/page-intro.module').then(m => m.PageIntroModule)
  },
  {
    path: 'showcase',
    loadChildren: () => import('./page-showcase/page-showcase.module').then(m => m.PageShowcaseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
