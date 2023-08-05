import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageShowcaseRoutingModule } from './page-showcase-routing.module';
import { PageShowcaseComponent } from './page-showcase.component';


@NgModule({
  declarations: [
    PageShowcaseComponent
  ],
  imports: [
    CommonModule,
    PageShowcaseRoutingModule
  ]
})
export class PageShowcaseModule { }
