import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-edit-component',
  template: `
    <div *ngIf='childSelectedKeg'>
      <div class="form-group form-inline">
        <label>Name</label>
        <input class="form-control" [(ngModel)]='childSelectedKeg.name' type="text">
      </div>
      <div class="form-group form-inline">
        <label>Price</label>
        <input class="form-control" [(ngModel)]='childSelectedKeg.price' type="text">
      </div>
      <div class="form-group form-inline">
        <label>Brand</label>
        <input class="form-control" [(ngModel)]='childSelectedKeg.brand' type="text">
      </div>
      <div class="form-group form-inline">
        <label>Alc%</label>
        <input class="form-control" [(ngModel)]='childSelectedKeg.alc' type="text">
      </div>
      <button class="btn btn-info" (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class KegEditComponent {
  @Input() childSelectedKeg : Keg;
  @Output() doneClickSender = new EventEmitter();

  doneButtonClicked() {
    this.doneClickSender.emit();
  }
}
