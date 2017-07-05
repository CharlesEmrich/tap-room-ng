import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list-component',
  template: `
    <ul>
      <li *ngFor="let currentKeg of childKegList">{{currentKeg.name}}</li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList : Keg[];
}
