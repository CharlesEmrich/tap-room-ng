import {Component, EventEmitter, Output} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-new-component',
  template: `
    <div class="row">
      <div class="form-group form-inline">
        <label>Name</label>
        <input class="form-control" #nameInput type="text">
      </div>
      <div class="form-group form-inline">
        <label>Price</label>
        <input class="form-control" #priceInput type="number">
      </div>
      <div class="form-group form-inline">
        <label>Brand</label>
        <input class="form-control" #brandInput type="text">
      </div>
      <div class="form-group form-inline">
        <label>Alc%</label>
        <input class="form-control" #alcInput type="number">
      </div>
      <button class="btn btn-info" (click)="formSubmit(nameInput.value, priceInput.value, brandInput.value, alcInput.value); nameInput.value=''; priceInput.value=''; brandInput.value=''; alcInput.value=''">Add New Keg</button>
    </div>
  `
})

export class KegNewComponent {
  @Output() formSubmitSender = new EventEmitter();

  formSubmit(nameInput : string, priceInput : string, brandInput : string, alcInput : string) {
    if (nameInput && parseInt(priceInput) && brandInput && parseInt(alcInput)) {
      const emittedKeg = new Keg(nameInput, parseInt(priceInput), brandInput, parseInt(alcInput));
      this.formSubmitSender.emit(emittedKeg);
    }
  }
}
