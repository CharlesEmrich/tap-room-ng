import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "low-pint",
  pure: false

})

export class LowPintPipe implements PipeTransform {
  transform(input : Keg[]) {
    // return filterType === "lowKegs" ? input.filter(keg => keg.pints < 10) : input;
    return input.filter(keg => keg.pints < 10);
  }
}
