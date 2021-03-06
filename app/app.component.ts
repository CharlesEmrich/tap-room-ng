import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <h2 class="jumbotron text-center">A Bar</h2>
    <div class="container">
      <keg-new-component *ngIf="false" (formSubmitSender)="addKeg($event)"></keg-new-component>
      <keg-edit-component [childSelectedKeg]="selectedKeg" (doneClickSender)="editKegDone()"></keg-edit-component>
      <keg-list-component [childKegList]="masterKegList"
                          [childHappyHour]="masterHappyHour"
                          (selectKegSender)="editKeg($event)"
                          (pourSender)="pourGlass($event)"
                          (saleSender)="startSale($event)"
                          (saleEndSender)="endSale($event)"
                          (happyHourSender)="startHappyHour()"
                          (happyHourEnder)="endHappyHour()">
      </keg-list-component>
    </div>
  `
})

export class AppComponent {
  selectedKeg : Keg = null;
  masterHappyHour : boolean = false;
  masterKegList : Keg[] = [
    new Keg('Armadillo', 5, 'New West', 6.4),
    new Keg('Spitfire', 4, 'Santiam', 4.1),
    new Keg('Que Paso?', 5, 'Fat Head\'s/Ex Novo', 8.4)
  ];
  addKeg(keg : Keg) {
    this.masterKegList.push(keg);
  }
  editKeg(keg : Keg) {
    this.selectedKeg = keg;
  }
  editKegDone() {
    this.selectedKeg = null;
  }
  pourGlass(order) {
    const keg = order.keg;
    const glassType = order.volume;

    if (glassType === 'pint' && keg.pints > 0) {
      keg.pints--;
    } else if (glassType === 'growler' && keg.pints > 1) {
      keg.pints -= 2;
    } else if (glassType === 'lgGrowler' && keg.pints > 3) {
      keg.pints -= 4;
    }
  }
  startSale(object) {
    const keg = object.keg;
    const percentSale = object.percent;
    keg.onSale = true;
    keg.salePrice = keg.price * ((100 - percentSale) / 100);
  }
  endSale(keg : Keg) {
    keg.onSale = false;
    keg.salePrice = keg.price;
  }
  startHappyHour() {
    this.masterHappyHour = true;
    this.masterKegList.forEach((keg) => {
      keg.onSale = true;
      keg.salePrice = keg.price * 0.75;
    });
  }
  endHappyHour() {
    this.masterHappyHour = false;
    this.masterKegList.forEach((keg) => {
      keg.onSale = false;
      keg.salePrice = keg.price;
    });
  }
}
