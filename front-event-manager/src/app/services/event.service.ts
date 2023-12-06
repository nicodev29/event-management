import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  createEvent(event: Event): Observable<any> {
    return this.http.post(this.apiUrl + '/create', event);
  }

  getEventsByStatus(status: string) {
    return this.http.get<Event[]>(`${this.apiUrl}/public`);
  }
  

}