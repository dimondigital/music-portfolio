import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarModule} from './avatar/avatar.module';
import {LiveTextModule} from './live-text/live-text.module';
import {GenreSelectModule} from './genre-select/genre-select.module';
import {PortfolioElementModule} from './portfolio-element/portfolio-element.module';
import {YoutubePipeModule} from './youtube-pipe/youtube-pipe.module';
import {TagsModule} from './tags/tags.module';
import {TrimModule} from "./trim/trim.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    LiveTextModule,
    GenreSelectModule,
    PortfolioElementModule,
    YoutubePipeModule,
    TagsModule,
    TrimModule
  ]
})
export class SharedModule {
}
