import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list-component',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="lowKegs">Kegs with Pints < 10</option>
    </select>
    <div class="well" *ngFor='let currentKeg of childKegList | lowPint:filterType'>
      <h1>{{currentKeg.name}}</h1>
      <h1>{{currentKeg.brand}}</h1>
      <h2><span [style.color]="priceColor(currentKeg)">\${{currentKeg.price}}</span></h2>
      <h3><span [style.background-color]="alcColor(currentKeg)">{{currentKeg.alc}}% ABV</span></h3>
      <h3>{{currentKeg.pints}} pints remaining</h3>
      <button class="btn btn-info" (click)="selectKeg(currentKeg)">Edit</button>
      <button class="btn btn-info" (click)="sendOrder(currentKeg, 'pint')">Pour Pint (16 oz)</button>
      <button class="btn btn-info" (click)="sendOrder(currentKeg, 'growler')">Pour Growler (32 oz)</button>
      <button class="btn btn-info" (click)="sendOrder(currentKeg, 'lgGrowler')">Pour Large Growler (64 oz)</button>
      <div class="bg-fill" [style.width]="fillWidth(currentKeg)"></div>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList : Keg[];
  @Output() selectKegSender = new EventEmitter();
  @Output() pourSender = new EventEmitter();
  filterType : string = 'allKegs';

  selectKeg(keg : Keg) {
    this.selectKegSender.emit(keg);
  }
  sendOrder(keg : Keg, glassType: string) {
    const order = {keg: keg, volume: glassType};
    this.pourSender.emit(order);
  }
  priceColor(keg : Keg) {
    return keg.price < 5 ? "green" : "red";
  }
  alcColor(keg : Keg) {
    return `rgba(${Math.floor((30 * keg.alc))},155,155,1)`;
  }
  onChange(menuOption) {
    this.filterType = menuOption;
  }
  fillWidth(keg : Keg) {
    return `${100 * (keg.pints / 124)}%`;
  }
}
