import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { EventComponent } from './event/event.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAn27B61u7vteCXhBNvExJtOqXeutTD94w',
      libraries: ["places"]
    })
  ],
  providers: [AuthService],
  declarations: [ AppComponent, MapComponent, EventComponent, CallbackComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}