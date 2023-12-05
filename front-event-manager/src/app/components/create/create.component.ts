import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {





  event: Event = new Event(); // Inicializa la propiedad event
  constructor(private eventService: EventService,
              private router: Router ) {}

  onFormSubmit() {
    this.eventService.createEvent(this.event).subscribe({
      next: (res) => {
        console.log('Evento guardado con éxito', res);
        // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
      },
      error: (err) => {
        console.error('Error al guardar el evento', err);
        // Manejar errores aquí
      }
    });
  }

  cancel() {
    this.router.navigate(['']);
  }
}
