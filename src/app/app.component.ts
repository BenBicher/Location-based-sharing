import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {

  title: string = 'Location Base Sharing';
  
  ngOnInit() {
    var mapProp = {
      // center: new google.maps.LatLng(31.771959, 35.217018),
      
      // mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  }
  zoom: number = 5;
  lat: number = 31.771959;
  lng: number = 35.217018;
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