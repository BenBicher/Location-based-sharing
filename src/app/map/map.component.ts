import { Component, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';
import { LocationService } from '../services/location.service';
import { MapsAPILoader } from '../../../node_modules/@agm/core';
import { formatDate } from '../../../node_modules/@angular/common';
// import { } from "@types/googlemaps";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

@Injectable()
export class MapComponent {
  //zoom level
  zoom: number = 2;
  //start position
  latitude: number;
  longitude: number;
  radius: number = 500;

  locationChosen = false;
  searchControl: FormControl;
  events: Event[];

  constructor(
    private locationService: LocationService,
    private authService: AuthService,
    private _eventService: EventService) {
    if (this.authService.isLoggedIn) {
      this._eventService.getAllEvents<Event>().subscribe((data) => {
        // for (var i = 0; i < data.length; i++) {
        //   if (data[i].endTime < datetime) {

        //   }
        // }
        this.events = data;
        this.locationService.findMe();
        this.locationService.changeTheRadius();
        this.zoom = 15;
      });
    }
  }

  clickedMarker(marker: Event, index: number) {
    console.log(marker.name + ' marker')
  }

  ngOnInit() { }

  removeMarker(marker) {
    if (marker.publisher == JSON.parse(localStorage.getItem('currentprofile')).name) {
      console.log('Removing marker....');
      for (var i = 0; i < this.events.length; i++) {
        if (marker.latitude == this.events[i].latitude && marker.longitude == this.events[i].longitude) {
          this.events.splice(i, 1);
        }
      }
      this._eventService.deleteEvent(marker.name).subscribe(data => {
        setTimeout(() => {
          this._eventService.getAllEvents<Event>().subscribe((data) => {
            this.events = data;
          });
        }, 2000);
      });
    }
  }

  joinEvent(marker) {
    if (this.authService.isLoggedIn) {
      var newMarker = { ...marker };
      newMarker.numOfParticipants -= 1;
      newMarker.peopleThatJoined += " " + JSON.parse(localStorage.getItem('currentprofile')).name;
    }
    this._eventService.updateEvent(newMarker).subscribe(data => {
      setTimeout(() => {
        this._eventService.getAllEvents<Event>().subscribe((data) => {
          this.events = data;
        });
      }, 2000);
    });
  };
}