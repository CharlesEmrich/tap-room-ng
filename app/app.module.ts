import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {KegListComponent} from './keg-list.component';
import {KegNewComponent} from './keg-new.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent,
                  KegListComponent,
                  KegNewComponent
                ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
