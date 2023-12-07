import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-enrolled-events',
  templateUrl: './enrolled-events.component.html',
  styleUrls: ['./enrolled-events.component.css']
})
export class EnrolledEventsComponent implements OnInit {

  enrolledEvents: Event[] = [];
  dataSource: Event[] = [];

  constructor(private eventService: EventService,
    private router: Router,
    private dialog: MatDialog) {}

  displayedColumns: string[] = [
    'name',
    'shortDescription',
    'longDescription',
    'dateTime',
    'organizer',
    'location',
  ];



  ngOnInit(): void {
    this.eventService.getEnrolledEvents().subscribe((events) => {
      this.enrolledEvents = events;
    }, error => {
      console.log('Error al obtener eventos inscritos:', error);
    });
  }


  cancel() {
    this.router.navigate(['user']);
  }
}
