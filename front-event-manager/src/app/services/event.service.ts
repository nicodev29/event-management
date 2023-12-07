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

  enrollInEvent(eventId: number): Observable<any> {
    console.log("Enviando solicitud de inscripción para el evento con ID:", eventId);
    return this.http.post(`${this.apiUrl}/enroll/${eventId}`, null);
  }

  getEventsByStatus(status: string) {
    return this.http.get<Event[]>(`${this.apiUrl}/public`);
  }
  
  getAllEvents() {
    return this.http.get<Event[]>(`${this.apiUrl}/all`);
  }

  updateEvent(id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${id}`, event);
  }

  getPublishedFutureEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/enroll`);
  }
  

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getEnrolledEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl + '/events/enrolled');
  }

}