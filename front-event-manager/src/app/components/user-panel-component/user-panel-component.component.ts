import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel-component',
  templateUrl: './user-panel-component.component.html',
  styleUrls: ['./user-panel-component.component.css'],
})
export class UserPanelComponentComponent {
  constructor(private router: Router) {}

  enrollment() {
    this.router.navigate(['enrolled-events']);
  }
  cancel() {
    this.router.navigate(['']);
  }
  onActual() {
    this.router.navigate(['user-event']);
  }
}
