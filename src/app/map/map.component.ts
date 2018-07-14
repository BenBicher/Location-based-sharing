import { Component, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MarkerService} from '../services/markers.sevice'
import { AuthService } from '../auth/auth.service';


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
  latitude: number = 31.771959;
  longitude: number = 35.217018;
  
  locationChosen = false;
  searchControl: FormControl;
  
  markers: marker[]
  
  constructor(private _markerService: MarkerService,
    private authService: AuthService) {
      setTimeout(() => {
        if(this.authService.isLoggedIn){
          this.markers = this._markerService.getMarkers();
          this.zoom = 8;
        }
      }, 2000);
    
  }
  
  clickedMarker(marker:marker, index: number){
    console.log(marker.name + ' marker')
  }
  
  markerDragEnd(marker:any, $event:any){
    var updMarker = {
      name: marker.name,
      latitude: parseFloat(marker.latitude),
      longitude: parseFloat(marker.longitude),
      draggable: false
    }
    console.log($event)
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

    this._markerService.updateMarker(updMarker, newLat, newLng);
  }
  
  ngOnInit() {  }
  
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