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
    // Inicializa el FormGroup utilizando FormBuilder
    this.eventForm = this.fb.group({
      name: ['', Validators.required], // Campo requerido
      shortDescription: ['', Validators.required],
      longDescription: [''],
      dateTime: ['', Validators.required],
      organizer: ['', Validators.required],
      location: ['', Validators.required],
      status: [this.EventStatus.PUBLISHED, Validators.required]
    });
  }

  // Modifica onFormSubmit para trabajar con FormGroup
  onFormSubmit() {

    console.log(this.eventForm.value); // Imprime los valores del formulario
    console.log(this.eventForm.valid); // Imprime el estado de validez del formulario
    
    if (this.eventForm.valid) {

      console.log('Sending this data to the server:', this.eventForm.value);
      this.eventService.createEvent(this.eventForm.value).subscribe({
        next: (res) => {
          // Abre una snackbar con un mensaje de confirmación
          this.snackBar.open('Evento guardado con éxito', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snackbar-success']
          });
          // Redirecciona o resetea el formulario
          this.eventForm.reset();
          this.router.navigate(['']); // O cualquier ruta que desees
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
    this.router.navigate(['']); // Redirige a la página principal o adecuada
  }
}
