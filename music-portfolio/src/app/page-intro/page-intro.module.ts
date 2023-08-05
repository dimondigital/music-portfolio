import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageIntroRoutingModule } from './page-intro-routing.module';
import { PageIntroComponent } from './page-intro.component';
import {AvatarModule} from "../avatar/avatar.module";
import {LiveTextModule} from "../live-text/live-text.module";


@NgModule({
  declarations: [
    PageIntroComponent
  ],
  imports: [
    CommonModule,
    PageIntroRoutingModule,
    AvatarModule,
    LiveTextModule
  ]
})
export class PageIntroModule { }
