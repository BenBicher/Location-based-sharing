import { Component, ViewChild } from '@angular/core';
<<<<<<< HEAD
// import {  } from '@types/googlemaps';
=======
// import { } from '@types/googlemaps';
>>>>>>> 60e5796bece8485149359f4079732b389a495372

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
 
<<<<<<< HEAD
  title: string = 'Location Base Sharing';
  zoom: number = 5;
  lat: number = 31.771959;
  lng: number = 35.217018;
  
=======
  // @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  isTracking = false;

  currentLat: any;
  currentLong: any;

  marker: google.maps.Marker;

>>>>>>> 60e5796bece8485149359f4079732b389a495372
  ngOnInit() {
    var mapProp = {
      // center: new google.maps.LatLng(31.771959, 35.217018),
      
      // mapTypeId: google.maps.MapTypeId.ROADMAP
    };
<<<<<<< HEAD
=======
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
>>>>>>> 60e5796bece8485149359f4079732b389a495372
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