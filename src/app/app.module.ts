import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxNumberBoxModule } from 'devextreme-angular/ui/number-box';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxNumberBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
