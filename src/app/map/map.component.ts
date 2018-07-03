import { Component, ViewChild } from '@angular/core';
// import {  } from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
 
  title: string = 'Location Base Sharing';
  zoom: number = 5;
  lat: number = 31.771959;
  lng: number = 35.217018;
  
  ngOnInit() {
    var mapProp = {
      // center: new google.maps.LatLng(31.771959, 35.217018),
      
      // mapTypeId: google.maps.MapTypeId.ROADMAP
    };
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
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    this.zoom = 15;
  }
}