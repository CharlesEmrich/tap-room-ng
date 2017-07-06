import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list-component',
  template: `
  <div class="row well">
    <select class="form-control form-group form-inline" (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="lowKegs">Kegs with Pints < 10</option>
    </select>
    <select class="form-control form-group form-inline" (change)="onBrandChange($event.target.value)">
      <option value="allBrands">All Brands</option>
      <option *ngFor='let currentBrand of childKegList | uniqueBrand' [value]='currentBrand'>{{currentBrand}}</option>
    </select>
    <button class="btn btn-info" *ngIf="!childHappyHour" (click)="sendHappyHour()">Happy Hour!</button>
    <button class="btn btn-info" *ngIf="childHappyHour" (click)="endHappyHour()">Sad Hour!</button>
  </div>
  <div class="row form-group">
    <div class="well" *ngFor='let currentKeg of childKegList | lowPint:filterType | byBrand:brandFilter'>
      <h1>{{currentKeg.name}}</h1>
      <h1>{{currentKeg.brand}}</h1>
      <h2><span [style.color]="priceColor(currentKeg)">\${{currentKeg.salePrice}} <span *ngIf='currentKeg.onSale'>(on sale)</span></span></h2>
      <h3><span [style.background-color]="alcColor(currentKeg)">{{currentKeg.alc}}% ABV</span></h3>
      <h3>{{currentKeg.pints}} pints remaining</h3>
      <button class="btn btn-info" (click)="selectKeg(currentKeg)">Edit</button>
      <button class="btn btn-info" (click)="sendOrder(currentKeg, 'pint')">Pour Pint (16 oz)</button>
      <button class="btn btn-info" (click)="sendOrder(currentKeg, 'growler')">Pour Growler (32 oz)</button>
      <button class="btn btn-info" (click)="sendOrder(currentKeg, 'lgGrowler')">Pour Large Growler (64 oz)</button>
      <div class='sale-control' *ngIf='!currentKeg.onSale'>
        <select class='form-control form-group' #salePercentage>
          <option value="10">10%</option>
          <option value="20">20%</option>
          <option value="30">30%</option>
        </select>
        <button class='btn btn-info' (click)='sendSale(currentKeg, salePercentage.value)'>Start Sale</button>
      </div>
      <button class='btn btn-info' *ngIf='currentKeg.onSale && !childHappyHour' (click)='sendSaleEnd(currentKeg)'>End Sale</button>
      <div class="bg-fill" [style.width]="fillWidth(currentKeg)"></div>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList : Keg[];
  @Input() childHappyHour : boolean;
  @Output() selectKegSender = new EventEmitter();
  @Output() pourSender = new EventEmitter();
  @Output() saleSender = new EventEmitter();
  @Output() saleEndSender = new EventEmitter();
  @Output() happyHourSender = new EventEmitter();
  @Output() happyHourEnder = new EventEmitter();
  filterType : string = 'allKegs';
  brandFilter : string = 'allBrands';

  selectKeg(keg : Keg) {
    this.selectKegSender.emit(keg);
  }
  sendOrder(keg : Keg, glassType: string) {
    const order = {keg: keg, volume: glassType};
    this.pourSender.emit(order);
  }
  priceColor(keg : Keg) {
    return keg.salePrice < 5 ? "green" : "red";
  }
  alcColor(keg : Keg) {
    return `rgba(${Math.floor((30 * keg.alc))},155,155,1)`;
  }
  onChange(menuOption) {
    this.filterType = menuOption;
  }
  onBrandChange(menuOption) {
    this.brandFilter = menuOption;
  }
  fillWidth(keg : Keg) {
    return `${100 * (keg.pints / 124)}%`;
  }
  sendSale(keg : Keg, percentage: string) {
    const percentSale = parseInt(percentage);
    const event = {keg: keg, percent: percentSale};
    this.saleSender.emit(event);
  }
  sendSaleEnd(keg : Keg) {
    this.saleEndSender.emit(keg);
  }
  sendHappyHour() {
    this.happyHourSender.emit();
  }
  endHappyHour() {
    this.happyHourEnder.emit();
  }
}
