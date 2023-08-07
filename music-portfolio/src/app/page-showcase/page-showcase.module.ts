import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageShowcaseRoutingModule } from './page-showcase-routing.module';
import { PageShowcaseComponent } from './page-showcase.component';
import {GenreSelectModule} from "../genre-select/genre-select.module";


@NgModule({
  declarations: [
    PageShowcaseComponent
  ],
    imports: [
        CommonModule,
        PageShowcaseRoutingModule,
        GenreSelectModule
    ]
})
export class PageShowcaseModule { }
