import { Component } from '@angular/core';
import { Event } from '../model/event.model';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrl: './create-component.component.css'
})
export class CreateComponentComponent {

  event: Event = new Event();


  onSave() {
    console.log('Evento a guardar:', this.event);
  }

}
