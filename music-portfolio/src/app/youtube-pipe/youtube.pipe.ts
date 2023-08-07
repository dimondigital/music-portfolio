import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

/**
 * Generated class for the Youtube pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'youtube',
})
export class Youtube implements PipeTransform {
  constructor(private dom: DomSanitizer) {

  }

  transform(value: string): SafeHtml {
    return this.dom.bypassSecurityTrustHtml(value);
  }
}
