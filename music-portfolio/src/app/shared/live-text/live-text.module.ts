import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveTextComponent } from './live-text.component';



@NgModule({
  declarations: [
    LiveTextComponent
  ],
  exports: [
    LiveTextComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LiveTextModule { }
