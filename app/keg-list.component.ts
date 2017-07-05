import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list-component',
  template: `
      <div class="well" *ngFor="let currentKeg of childKegList">
        <h1>{{currentKeg.name}}</h1>
        <h1>{{currentKeg.brand}}</h1>
        <h2><span [style.color]="priceColor(currentKeg)">\${{currentKeg.price}}</span></h2>
        <h3><span [style.background-color]="alcColor(currentKeg)">{{currentKeg.alc}}% ABV</span></h3>
        <h3>{{currentKeg.pints}} pints remaining</h3>
        <button class="btn btn-info" (click)="selectKeg(currentKeg)">Edit</button>
        <button class="btn btn-info" (click)="pour(currentKeg)">Pour</button>
      </div>
  `
})

export class KegListComponent {
  @Input() childKegList : Keg[];
  @Output() selectKegSender = new EventEmitter();
  @Output() pourSender = new EventEmitter();

  selectKeg(keg : Keg) {
    this.selectKegSender.emit(keg);
  }
  pour(keg : Keg) {
    this.pourSender.emit(keg);
  }
  priceColor(keg : Keg) {
    return keg.price < 5 ? "green" : "red";
  }
  alcColor(keg : Keg){
    return `rgba(${Math.floor((30 * keg.alc))},155,155,1)`;
  }
}
