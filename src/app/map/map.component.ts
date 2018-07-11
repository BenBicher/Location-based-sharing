import { Component, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { Marker } from '@agm/core/services/google-maps-types';
import { MarkerService} from '../services/markers.sevice'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MarkerService]
})

@Injectable()
export class MapComponent {
  //zoom level
  zoom: number = 2;
  //start position
  latitude: number;
  longitude: number;
  
  locationChosen = false;
  searchControl: FormControl;
  
  markers: marker[]
  
  constructor(private _markerService: MarkerService) {
    this.markers = this._markerService.getMarkers();
  }
  
  clickedMarker(marker:marker, index: number){
    console.log(marker.name + index)
  }
  
  markerDragEnd(marker:any, $event:any){
    var updMarker = {
      name: marker.name,
      latitude: parseFloat(marker.latitude),
      longitude: parseFloat(marker.longitude),
      draggable: false
    }
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

    this._markerService.updateMarker(updMarker, newLat, newLng);
  }
  
  ngOnInit() {  }
  
  // onChoseLocation(event){
  //   this.latitude = event.coords.lat;
  //   this.longitude = event.coords.lng;
  //   this.locationChosen = true;
  //   this.zoom = 15;
  // }

  removeMarker(marker){
    console.log('Removing marker....');
    for(var i = 0; i < this.markers.length; i++){
      if(marker.latitude == this.markers[i].latitude && marker.longitude == this.markers[i].longitude){
        this.markers.splice(i, 1);
      }
    }
    this._markerService.removeMarker(marker);
  }
}

interface marker{
  name?:string;
  numOfParticipants: number;
  comment: string;
  latitude: number;
  longitude:number;
  draggable:boolean;
  publisher: string;
}