import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';
import { EditEventDialogComponentComponent } from '../edit-event-dialog-component/edit-event-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component'; // Asegúrate de que la ruta sea correcta
 

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css'],
})
export class AllEventsComponent implements OnInit {
 

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

  constructor(
    private eventService: EventService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((events) => {
      console.log('Todos los Eventos:', events);
      this.dataSource = events;
    });
  }

  openEditDialog(event: Event) {
    const dialogRef = this.dialog.open(EditEventDialogComponentComponent, {
      width: '500px',
      data: event, // Pasas el evento a editar
      
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteEvent(eventId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: '¿Estás seguro de querer eliminar este evento?' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Confirmado, eliminar evento
        this.eventService.deleteEvent(eventId).subscribe(() => {
          // Evento eliminado, recargar lista de eventos
          this.ngOnInit();
        });
      }
    });
  }
  
  cancel() {
    this.router.navigate(['admin']);
  }
}
