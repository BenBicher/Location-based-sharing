import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[];
  isShowOn: boolean = false;
  currentPublisher: string;
  
  constructor(
    private authService: AuthService,
    private _eventService: EventService) {
    if (this.authService.isLoggedIn) {
      this._eventService.getAllEvents<Event>().subscribe((data) => {
        this.events = data;
        this.currentPublisher = JSON.parse(localStorage.getItem('currentprofile')).name;

      });
    }
  }
  ngOnInit() { }

  showOn(marker) {
    marker.isShowOn = !marker.isShowOn;
  }
  joinEvent(marker) {
    if (this.authService.isLoggedIn) {
      var newMarker = { ...marker };
      newMarker.numOfParticipants -= 1;
      newMarker.peopleThatJoined += JSON.parse(localStorage.getItem('currentprofile')).name;
    }
    this._eventService.updateEvent(newMarker).subscribe(data => {
      setTimeout(() => {
        this._eventService.getAllEvents<Event>().subscribe((data) => {
          this.events = data;
        });
      }, 2000);
    });
  }

  removeMarker(marker) {
    if (marker.publisher == JSON.parse(localStorage.getItem('currentprofile')).name) {
      console.log('Removing marker....');
      for (var i = 0; i < this.events.length; i++) {
        if (marker.latitude == this.events[i].latitude && marker.longitude == this.events[i].longitude) {
          this.events.splice(i, 1);
        }
      }
      this._eventService.deleteEvent(marker.name).subscribe(data => { });
      this._eventService.getAllEvents<Event>().subscribe((data) => {
        this.events = data;
      });
    }
  }
}