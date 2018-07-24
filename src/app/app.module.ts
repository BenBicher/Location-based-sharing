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
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './services/event.service'
import {HttpModule} from '@angular/http';
import { LocationService } from './services/location.service'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAn27B61u7vteCXhBNvExJtOqXeutTD94w',
      libraries: ["places"]
    }),
    AppRoutingModule, 
  ],
  providers: [AuthService,MapComponent, UserProfileComponent, EventService, LocationService],
  declarations: [ AppComponent, MapComponent, EventComponent, CallbackComponent, UserProfileComponent, EventListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}