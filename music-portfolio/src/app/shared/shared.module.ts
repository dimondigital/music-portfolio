import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from '../avatar/avatar.component';
import {AvatarModule} from '../avatar/avatar.module';
import { LiveTextModule } from '../live-text/live-text.module';
import { GenreSelectModule } from '../genre-select/genre-select.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    LiveTextModule,
    GenreSelectModule
  ]
})
export class SharedModule {
}
