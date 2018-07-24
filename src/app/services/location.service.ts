import { Injectable } from "../../../node_modules/@angular/core";
import { MapsAPILoader, MapTypeStyle } from '@agm/core';
import { EventService } from "./event.service";
import { Event } from '../models/event.model';

@Injectable()
export class LocationService {
    latitude: number;
    longitude: number;
    radius: number = 500;
    events: Event[];

    constructor(private mapsAPILoader: MapsAPILoader,
        private _eventService: EventService) {
        this._eventService.getAllEvents<Event>().subscribe((data) => {
            this.events = data;
        });
        this.findMe();
    }

    findMe() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.showPosition(position);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    showPosition(position) {
        this.latitude = parseFloat(position.coords.latitude);
        this.longitude = parseFloat(position.coords.longitude);
    }

    changeTheRadius() {
        this.findMe();
        this.mapsAPILoader.load().then(() => {
            const center = new google.maps.LatLng(this.latitude, this.longitude);
            this.events = this.events.filter(m => {
                const markerLoc = new google.maps.LatLng(m.latitude, m.longitude);
                const distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, center);
                if (distanceInKm < this.radius) {
                    console.log(m);
                    return m;
                }
            });
        });
    }
}