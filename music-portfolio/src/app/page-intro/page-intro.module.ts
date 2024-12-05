import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageIntroRoutingModule} from './page-intro-routing.module';
import {PageIntroComponent} from './page-intro.component';
import {AvatarModule} from "../shared/avatar/avatar.module";
import {LiveTextModule} from "../shared/live-text/live-text.module";
import {SocialModule} from "../shared/social/social.module";


@NgModule({
  declarations: [
    PageIntroComponent
  ],
  imports: [
    CommonModule,
    PageIntroRoutingModule,
    AvatarModule,
    LiveTextModule,
    SocialModule
  ]
})
export class PageIntroModule {
}
