import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})

export class EventComponent implements OnInit {
  markerName:string;
  markerNumOfParticipants: number;
  markerComment: string;
  markerPicture: string;
  markerLat:number;
  markerLng:number;
  markerDraggable:string;
  markerPublisher:string;
  searchControl: FormControl;
  currnetLocation:boolean;
  startTime: Date;
  endTime:Date;

  constructor(
    private router: Router,
    private authService: AuthService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private _eventService: EventService) {}
  
  addMarker(){
    console.log('Adding');
    console.log(this.startTime + "end=" + this.endTime);
    var newMarker = {
      name:this.markerName,
      numOfParticipants: this.markerNumOfParticipants,
      comment: this.markerComment,
      picture: this.markerPicture,
      latitude: this.markerLat,
      longitude: this.markerLng,
      publisher: JSON.parse(localStorage.getItem('currentprofile')).name,
      peopleThatJoined: "",
      isShowOn: false,
      startTime: this.startTime,
      endTime: this.endTime
    }
    this._eventService.insertEvent(newMarker).subscribe(data => {});
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

  onImagePicked($event){
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.markerPicture = reader.result;
      }
    }
  }
}
