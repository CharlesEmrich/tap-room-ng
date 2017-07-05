import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <h2 class="jumbotron text-center">A Bar</h2>
    <div class="container">
      <keg-new-component (formSubmitSender)="addKeg($event)"></keg-new-component>
      <keg-list-component [childKegList]="masterKegList"></keg-list-component>
    </div>
  `
})

export class AppComponent {
  masterKegList : Keg[] = [
    new Keg('Armadillo', 5, 'New West', 6.4),
    new Keg('Spitfire', 6, 'Santiam', 6.4),
    new Keg('Que Paso?', 5, 'Fat Head\'s/Ex Novo', 5.1)
  ];

  addKeg(keg : Keg) {
    this.masterKegList.push(keg);
  }
}
