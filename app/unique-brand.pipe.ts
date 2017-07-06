import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: 'uniqueBrand',
  pure: false
})

export class UniqueBrandPipe implements PipeTransform {
  transform(input : Keg[]) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
      if (output.indexOf(input[i].brand) === -1) {
        output.push(input[i].brand);
      }
    }
    return output;
  }
}
