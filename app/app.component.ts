import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <keg-list-component [childKegList]="masterKegList"></keg-list-component>
  `
})

export class AppComponent {
  masterKegList : Keg[] = [
    new Keg('Armadillo', 5, 'New West', 6.4),
    new Keg('Spitfire', 6, 'Santiam', 6.4),
    new Keg('Que Paso?', 5, 'Fat Head\'s/Ex Novo', 5.1)
  ];
}
