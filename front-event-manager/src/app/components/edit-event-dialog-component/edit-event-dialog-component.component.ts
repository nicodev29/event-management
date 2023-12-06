import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Event } from '../../models/event.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventStatus } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';




@Component({
  selector: 'app-edit-event-dialog-component',
  templateUrl: './edit-event-dialog-component.component.html',
  styleUrls: ['./edit-event-dialog-component.component.css']
})
export class EditEventDialogComponentComponent {

  constructor(
    public dialogRef: MatDialogRef<EditEventDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Event, // Recibe el evento a editar
    private fb: FormBuilder,
    private eventService: EventService,
  ) {
    this.initForm(data);
  }

  eventForm: FormGroup = new FormGroup({});
  EventStatus = EventStatus;


  private initForm(event: Event): void {
    this.eventForm = this.fb.group({
      name: [event.name, Validators.required],
      shortDescription: [event.shortDescription, Validators.required],
      longDescription: [event.longDescription],
      dateTime: [event.dateTime, Validators.required],
      organizer: [event.organizer, Validators.required],
      location: [event.location, Validators.required],
      status: [event.status, Validators.required]
    });
  }

  onFormSubmit(): void {
    if (this.eventForm.valid && this.data.id) {
      this.eventService.updateEvent(this.data.id, this.eventForm.value).subscribe({
        next: (updatedEvent) => {
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error al actualizar el evento:', err);
        }
      });
    } else {
      console.error('Formulario inválido o ID de evento no proporcionado');
    }
  }
  
  cancel(): void {
    this.dialogRef.close(); // Cierra el diálogo sin hacer cambios
  }
}


