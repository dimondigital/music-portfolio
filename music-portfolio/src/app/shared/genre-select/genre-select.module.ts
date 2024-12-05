import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenreSelectComponent} from './genre-select.component';


@NgModule({
  declarations: [
    GenreSelectComponent
  ],
  exports: [
    GenreSelectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GenreSelectModule {
}
