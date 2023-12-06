import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { EventStatus } from 'src/app/models/event.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // Define un FormGroup para manejar el formulario
  eventForm: FormGroup = new FormGroup({});
  EventStatus = EventStatus; // Inyecta el enum EventStatus
  
  constructor(
    private fb: FormBuilder, // Inyecta FormBuilder
    private eventService: EventService,
    private router: Router,
    private snackBar: MatSnackBar,
     // Inyecta el enum EventStatus 
  ) {}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      shortDescription: ['', Validators.required],
      longDescription: [''],
      dateTime: ['', Validators.required],
      organizer: ['', Validators.required],
      location: ['', Validators.required],
      status: [this.EventStatus.PUBLISHED, Validators.required]
    });
  }

  onFormSubmit() {

    if (this.eventForm.valid) {

      this.eventService.createEvent(this.eventForm.value).subscribe({
        next: (res) => {
          // Abre una snackbar con un mensaje de confirmación
          this.snackBar.open('Evento guardado con éxito', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snackbar-success']
          });
          this.eventForm.reset();
          this.router.navigate(['admin']); 
        },
        error: (err) => {
          // Abre una snackbar con un mensaje de error
          this.snackBar.open('Error al guardar el evento', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snackbar-error']
          });
        }
      });
    } else {
      // Si el formulario no es válido, muestra un mensaje
      this.snackBar.open('Por favor, completa todos los campos requeridos.', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snackbar-error']
      });
    }
  }

  cancel() {
    this.router.navigate(['admin']); // Redirige a la página principal o adecuada
  }
}
