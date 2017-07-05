import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list-component',
  template: `
      <div class="well" *ngFor="let currentKeg of childKegList">
        <h1>{{currentKeg.name}}</h1>
        <h1>{{currentKeg.brand}}</h1>
        <h2>\${{currentKeg.price}}</h2>
        <h3>{{currentKeg.alc}}% ABV</h3>
        <h3>{{currentKeg.pints}} pints remaining</h3>
        <button class="btn btn-info" (click)="selectKeg(currentKeg)">Edit</button>
      </div>
  `
})

export class KegListComponent {
  @Input() childKegList : Keg[];
  @Output() selectKegSender = new EventEmitter();

  selectKeg(keg : Keg) {
    this.selectKegSender.emit(keg);
  }

}
