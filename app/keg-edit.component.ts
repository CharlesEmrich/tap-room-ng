import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-edit-component',
  template: `
    <div  class="row" *ngIf='childSelectedKeg'>
      <div class="form-group form-inline">
        <label>Name</label>
        <input class="form-control" #nameField [(ngModel)]='childSelectedKeg.name' type="text">
      </div>
      <div class="form-group form-inline">
        <label>Price</label>
        <input class="form-control" #priceField [(ngModel)]='childSelectedKeg.price' type="number">
      </div>
      <div class="form-group form-inline">
        <label>Brand</label>
        <input class="form-control" #brandField [(ngModel)]='childSelectedKeg.brand' type="text">
      </div>
      <div class="form-group form-inline">
        <label>Alc%</label>
        <input class="form-control" #alcField [(ngModel)]='childSelectedKeg.alc' type="number">
      </div>
      <div class="bg-warning" *ngIf="!fieldsTruthy(nameField.value, priceField.value, brandField.value, alcField.value)">Please leave all fields filled out.</div>
      <button *ngIf="fieldsTruthy(nameField.value, priceField.value, brandField.value, alcField.value)" class="btn btn-info" (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class KegEditComponent {
  @Input() childSelectedKeg : Keg;
  @Output() doneClickSender = new EventEmitter();

  doneButtonClicked() {
    this.doneClickSender.emit();
  }
  fieldsTruthy(nameField : string, priceField : string, brandField : string, alcField : string) {
    return nameField && parseInt(priceField) && brandField && parseInt(alcField);
  }
}
