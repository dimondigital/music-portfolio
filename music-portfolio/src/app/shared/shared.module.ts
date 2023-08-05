import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from '../avatar/avatar.component';
import {AvatarModule} from '../avatar/avatar.module';
import { LiveTextModule } from '../live-text/live-text.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    LiveTextModule
  ]
})
export class SharedModule {
}
