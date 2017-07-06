export class Keg {
  pints : number = 124;
  onSale : boolean = false;
  salePrice : number = null;
  constructor( public name : string, public price : number, public brand : string, public alc : number) {
    this.salePrice = price;
  }
}
