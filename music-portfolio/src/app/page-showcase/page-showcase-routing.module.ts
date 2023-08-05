import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageShowcaseComponent } from './page-showcase.component';

const routes: Routes = [{ path: '', component: PageShowcaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageShowcaseRoutingModule { }
