import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <h2 class="jumbotron text-center">A Bar</h2>
    <div class="container">
      <keg-new-component *ngIf="false" (formSubmitSender)="addKeg($event)"></keg-new-component>
      <keg-edit-component [childSelectedKeg]="selectedKeg" (doneClickSender)="editKegDone()"></keg-edit-component>
      <keg-list-component [childKegList]="masterKegList" (selectKegSender)="editKeg($event)" (pourSender)="pourKeg($event)"></keg-list-component>
    </div>
  `
})

export class AppComponent {
  selectedKeg : Keg = null;
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
  pourKeg(keg : Keg) {
    keg.pints --;
  }
}
