import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { MarkerService} from '../services/markers.sevice'
import { MapsAPILoader } from '../../../node_modules/@agm/core';
import { FormControl } from '../../../node_modules/@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [MarkerService]
})

export class EventComponent implements OnInit {
  markerName:string;
  markerNumOfParticipants: number;
  markerComment: string;
  markerLat:number;
  markerLng:number;
  markerDraggable:string;
  markerPublisher:string;
  searchControl: FormControl;
  currnetLocation:boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private _markerService: MarkerService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {}
  
  addMarker(){
    console.log('Adding');
    if(this.markerDraggable == 'yes') {
      var isDraggable = true;
    } else{
      var isDraggable = false;
    }
    var newMarker = {
      name:this.markerName,
      numOfParticipants: this.markerNumOfParticipants,
      comment: this.markerComment,
      latitude: this.markerLat,
      longitude: this.markerLng,
      draggable: isDraggable,
      publisher: this.markerPublisher
    }
    this._markerService.addMarker(newMarker);
    this.router.navigate(['map']);
  }
  
  @ViewChild("search")
  public searchElementRef: ElementRef;

  ngOnInit() {
    this.searchControl = new FormControl();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude
          this.markerLat = place.geometry.location.lat();
          this.markerLng = place.geometry.location.lng();
        });
      });
    });
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
    this.markerLat = position.coords.latitude;
    this.markerLng = position.coords.longitude;
  }
}
