import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {
  transform(value: string) {
    console.log('11' + value);
    if (!value) {
      return '';
    }
    return value.replaceAll(" ", "");
  }
}
