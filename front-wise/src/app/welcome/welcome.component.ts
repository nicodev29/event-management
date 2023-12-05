import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  onState() {
    this.router.navigate(['/status-event']);
  }
  onActual() {
    this.router.navigate(['/current']);
  }

  onCreate() {
    this.router.navigate(['/create']);
  }
}
