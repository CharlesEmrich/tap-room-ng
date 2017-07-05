import { Component } from '@angular/core';
import { Model } from './model.model';

@Component({
  selector: 'app-root',
  template: `
    <h1> {{titleString.property}} <h1>
    <example-component></example-component>
  `
})

export class AppComponent {
  titleString : Model = new Model("Hello World.");
}
