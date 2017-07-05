import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: 'lowPint',
  pure: false
})

export class LowPintPipe implements PipeTransform {
  transform(input : Keg[], filterType) {
    return filterType === "lowKegs" ? input.filter(keg => keg.pints < 10) : input;
  }
}
