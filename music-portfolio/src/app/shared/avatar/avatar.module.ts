import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AvatarComponent} from "./avatar.component";


@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    AvatarComponent
  ]
})
export class AvatarModule {
}
