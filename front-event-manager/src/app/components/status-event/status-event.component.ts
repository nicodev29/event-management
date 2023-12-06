import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-event',
  templateUrl: './status-event.component.html',
  styleUrls: ['./status-event.component.css']
})
export class StatusEventComponent {

  constructor(private router: Router) {}



 cancel() {
    this.router.navigate(['']); // Redirige a la página principal o adecuada
  }

}
