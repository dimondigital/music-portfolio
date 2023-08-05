import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIntroComponent } from './page-intro.component';

const routes: Routes = [{ path: '', component: PageIntroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageIntroRoutingModule { }
