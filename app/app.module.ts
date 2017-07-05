import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {KegListComponent} from './keg-list.component';
import {KegNewComponent} from './keg-new.component';
import {KegEditComponent} from './keg-edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent,
                  KegListComponent,
                  KegNewComponent,
                  KegEditComponent
                ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
