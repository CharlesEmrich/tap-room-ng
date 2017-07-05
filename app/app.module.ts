import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ExampleComponent} from './example.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent,
                  ExampleComponent
                ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
