import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import {RouterLink} from "@angular/router";
import {TrimModule} from "../trim/trim.module";



@NgModule({
  declarations: [
    TagsComponent
  ],
  exports: [
    TagsComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    TrimModule
  ]
})
export class TagsModule { }
