import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: 'byBrand',
  pure: false
})

export class BrandPipe implements PipeTransform {
  transform(input : Keg[], brandFilter) {
    return brandFilter !== "allBrands" ? input.filter(keg => keg.brand === brandFilter) : input;
  }
}
