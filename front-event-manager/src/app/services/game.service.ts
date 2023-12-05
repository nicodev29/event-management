import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from '../models/tournament.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'http://localhost:8080/api/simulation';

  constructor(private http: HttpClient) { }

  startMatch(tournament: Tournament): Observable<any> {
    return this.http.post(`${this.apiUrl}/start`, tournament);
  }
}
