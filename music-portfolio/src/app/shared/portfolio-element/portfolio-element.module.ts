import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioElementComponent } from './portfolio-element.component';
import {YoutubePipeModule} from "../youtube-pipe/youtube-pipe.module";
import {TagsModule} from "../tags/tags.module";



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
    TagsModule
  ]
})
export class PortfolioElementModule { }
