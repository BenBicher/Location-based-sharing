import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/event.model';


@Injectable()
export class EventService {
  private Url = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAllEvents<T>(){
    return this.http.get<T[]>(this.Url + '/api/getevents');
  }

  insertEvent(event) {
    return this.http.post('http://localhost:8000/api/addevents', event);
  }

  updateEvent(event){
    return this.http.put<Event>('http://localhost:8000/api/updateEvents/' + event.name, event);
  }

  deleteEvent(name: string) {
    return this.http.delete(this.Url + '/api/events/' + name);
  }
}