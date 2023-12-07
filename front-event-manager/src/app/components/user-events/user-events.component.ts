import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent {


  displayedColumns: string[] = [
    'name',
    'shortDescription',
    'longDescription',
    'dateTime',
    'organizer',
    'location',
    'actions',
  ];

  dataSource: Event[] = [];

  constructor(private eventService: EventService,
    private router: Router,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.eventService.getPublishedFutureEvents().subscribe((events) => {
      console.log('Eventos recibidos:', events);
      this.dataSource = events;
    });
  }

  cancel() {
    this.router.navigate(['user']);
  }

  enroll(eventId: number): void {

    console.log("id es" + eventId)

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: '¿Quieres inscribirte en este evento?' }
    });
  
    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log("id es" + eventId)
      if (result) {
        this.eventService.enrollInEvent(eventId).subscribe(() => {
        });
        
      }
    });
  }
}


