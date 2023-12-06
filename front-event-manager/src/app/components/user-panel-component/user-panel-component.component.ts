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
    throw new Error('Method not implemented.');
  }
  cancel() {
    this.router.navigate(['']);
  }
  onActual() {
    this.router.navigate(['/current']);
  }
}
