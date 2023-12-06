import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  
  login() {
    this.router.navigate(['/login']);
  }

  constructor(private router: Router) {}

  editEvent() {
    this.router.navigate(['/status-event']);
  }
  onActual() {
    this.router.navigate(['/current']);
  }

  onCreate() {
    this.router.navigate(['/create']);
  }
}
