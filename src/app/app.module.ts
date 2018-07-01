import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAn27B61u7vteCXhBNvExJtOqXeutTD94w'
    })
  ],
  providers: [],
  declarations: [ AppComponent, MapComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}