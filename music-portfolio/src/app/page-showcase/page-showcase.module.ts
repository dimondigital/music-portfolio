import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageShowcaseRoutingModule } from './page-showcase-routing.module';
import { PageShowcaseComponent } from './page-showcase.component';
import {GenreSelectModule} from "../genre-select/genre-select.module";
import {PortfolioElementModule} from "../portfolio-element/portfolio-element.module";


@NgModule({
  declarations: [
    PageShowcaseComponent
  ],
    imports: [
        CommonModule,
        PageShowcaseRoutingModule,
        GenreSelectModule,
        PortfolioElementModule
    ]
})
export class PageShowcaseModule { }
