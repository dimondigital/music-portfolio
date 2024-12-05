import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageShowcaseRoutingModule } from './page-showcase-routing.module';
import { PageShowcaseComponent } from './page-showcase.component';
import {GenreSelectModule} from "../shared/genre-select/genre-select.module";
import {PortfolioElementModule} from "../shared/portfolio-element/portfolio-element.module";
import {SocialModule} from "../shared/social/social.module";


@NgModule({
  declarations: [
    PageShowcaseComponent
  ],
  imports: [
    CommonModule,
    PageShowcaseRoutingModule,
    GenreSelectModule,
    PortfolioElementModule,
    SocialModule
  ]
})
export class PageShowcaseModule { }
