import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmbedSanityzerPipe} from "./embedSanityzer.pipe";


@NgModule({
  declarations: [
    EmbedSanityzerPipe
  ],
  exports: [
    EmbedSanityzerPipe
  ],
  imports: [
    CommonModule
  ]
})
export class YoutubePipeModule {
}
