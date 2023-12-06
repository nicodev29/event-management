import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/models/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-event',
  templateUrl: './current-event.component.html',
  styleUrls: ['./current-event.component.css'],
})
export class CurrentEventComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'shortDescription',
    'longDescription',
    'dateTime',
    'organizer',
    'location',
  ]; // Ajusta según tus necesidades
  dataSource: Event[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.eventService.getEventsByStatus('PUBLICADO').subscribe((events) => {
      console.log('Eventos recibidos:', events);
      this.dataSource = events;
    });
  }

  cancel() {
    this.router.navigate(['']); // Redirige a la página principal o adecuada
  }
}
