import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Youtube} from "./youtube.pipe";


@NgModule({
  declarations: [
    Youtube
  ],
  exports: [
    Youtube
  ],
  imports: [
    CommonModule
  ]
})
export class YoutubePipeModule {
}
