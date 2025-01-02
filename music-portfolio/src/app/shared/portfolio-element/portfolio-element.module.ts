import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioElementComponent} from './portfolio-element.component';
import {YoutubePipeModule} from "../youtube-pipe/youtube-pipe.module";
import {TagsModule} from "../tags/tags.module";
import {TrimModule} from "../trim/trim.module";


@NgModule({
  declarations: [
    PortfolioElementComponent
  ],
  exports: [
    PortfolioElementComponent
  ],
  imports: [
    CommonModule,
    YoutubePipeModule,
    TagsModule,
    TrimModule
  ]
})
export class PortfolioElementModule {
}
